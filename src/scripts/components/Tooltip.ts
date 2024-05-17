import type { tooltip } from "@ts/types";

type tooltipsContent = { [key: string]: string };

const tooltipContainers = document.querySelectorAll(
  ".uc-astro-block [tooltip-container]"
);
if (tooltipContainers?.length) {
  tooltipContainers?.forEach((container) => {
    const overlay =
      container?.getAttribute("tooltip-container-overlay") === "true";
    if (overlay) {
      container.addEventListener("click", () => {
        if (container.classList.contains("overlay")) {
          removeTooltip();
        }
      });
    }
    const tooltips: NodeListOf<Element> | [] =
      container?.querySelectorAll("[tooltip-id]") ?? [];
    assignTooltipEventsListeners(tooltips);
  });
}

function assignTooltipEventsListeners(tooltips: NodeListOf<Element> | []) {
  const tooltipsContent: tooltipsContent = getTooltipsContent(tooltips);
  tooltips.forEach((element) => {
    element.addEventListener("mouseenter", (event: Event) => {
      onShowTooltip(event, tooltipsContent);
    });
    element.addEventListener("click", (event: Event) =>
      onShowTooltip(event, tooltipsContent)
    );
  });
}
function getTooltipContainer(tooltip: HTMLElement): HTMLElement {
  return tooltip?.closest("[tooltip-container]") as HTMLElement;
}

function getTooltipsContent(
  tooltips: NodeListOf<Element> | []
): tooltipsContent {
  const tooltipsContent: tooltipsContent = {};
  tooltips?.forEach((el) => {
    const container = getTooltipContainer(el as HTMLElement);
    const id: string = el?.getAttribute("tooltip-id") ?? "";
    const tooltip = container?.querySelector(`[tooltip-for="${id}"]`);
    const tooltipContent = tooltip?.getAttribute("tooltip-content") ?? "";

    if (!tooltip || !tooltipContent || tooltipsContent?.[id]) return;

    tooltipsContent[id as string] = tooltipContent as string;
  });
  return tooltipsContent;
}

function removeTooltip(): void {
  const highlightedElsContainer = document?.querySelector(
    "[highligted-tooltips-id]"
  ) as HTMLElement;
  const tooltipId = highlightedElsContainer?.getAttribute(
    "highligted-tooltips-id"
  );
  if (!highlightedElsContainer || !tooltipId) return;
  const tooltipEls = document?.querySelectorAll(
    `[origin-highlighted=${tooltipId}]`
  );
  tooltipEls?.forEach((el) => {
    el?.removeAttribute("origin-highlighted");
  });
  highlightedElsContainer?.remove();
  document?.getElementById("interactive-tooltip")?.remove();
  const container = document?.querySelector(
    "[tooltip-container][tooltip-container-overlay='true'].overlay"
  );
  if (container) container?.classList?.remove("overlay");
}

function onShowTooltip(event: Event, tooltipsContent: tooltipsContent): void {
  event.preventDefault();
  event.stopPropagation();
  const el = event.target as HTMLElement;
  const container = getTooltipContainer(el) as HTMLElement;
  const id = el.getAttribute("tooltip-id") ?? "";
  const content = tooltipsContent?.[id];

  if (!content) return;

  showTooltip(el, content, container);
}

function showTooltip(
  target: HTMLElement,
  content: string,
  container: HTMLElement
): void {
  container?.classList?.add("overlay");
  addHighlightTooltipEls(target, container);
  const newTooltip = createTooltip(JSON.parse(content));
  document.body.appendChild(newTooltip);
  positionTooltip(target, newTooltip, container);
}

function addHighlightTooltipEls(target: HTMLElement, container: HTMLElement) {
  const tooltipId = target.getAttribute("tooltip-id");
  const tooltipHighlightedEls = container?.querySelectorAll(
    `[tooltip-id=${tooltipId}]`
  );
  if (!tooltipId || !tooltipHighlightedEls) return;
  target.setAttribute("highlight-active", "true");
  const highlightedElsContainer = document.createElement("div");
  highlightedElsContainer?.setAttribute("highligted-tooltips-id", tooltipId);
  tooltipHighlightedEls.forEach((tooltipEl) => {
    const originEl = tooltipEl as HTMLElement;
    const originPos = getOffsetElPos(originEl);
    const { top, left } = originPos;
    const elClone = originEl.cloneNode(true) as HTMLElement;
    elClone.classList.add("shadow-1");
    elClone.style.top = `${top}px`;
    elClone.style.left = `${left}px`;
    elClone.style.width = `${originEl.offsetWidth}px`;
    elClone.style.height = `${originEl.offsetHeight}px`;
    highlightedElsContainer.appendChild(elClone);
    originEl.setAttribute("origin-highlighted", tooltipId);
    if (elClone.getAttribute("highlight-active") === "true") {
      elClone.addEventListener("mouseleave", removeTooltip);
    }
  });
  document.body.appendChild(highlightedElsContainer);
}

function createTooltip(content: tooltip | string): HTMLSpanElement {
  const span = document.createElement("span");
  span.setAttribute("id", "interactive-tooltip");
  span.classList.add("absolute", "shadow", "z-[100]");
  span.innerHTML =
    typeof content === "string"
      ? content
      : `<span class="tooltip-content !fixed gold-bordered rounded-[5px] p-[1px]">
                      <span class="flex flex-col justify-center items-center bg-dark-gold-gradient p-[15px] desktop-md:p-[30px] shadow rounded-[5px] relative z-30">
                        <h3 class="text-10-20 text-gold pb-[10px]">${content?.title}</h3>
                        <p class="font-jost text-[13px] text-[#FFC99D]">${content?.content}</p>
                      </span>
                    </span>`;
  return span;
}

function positionTooltip(
  target: HTMLElement,
  tooltip: HTMLElement,
  container: HTMLElement
) {
  const { width: containerWidth = 100, height: containerHeight = 100 } =
    container?.getBoundingClientRect();
  const {
    top: targetPosTop,
    left: targetPosLeft,
    bottom: targetPosBottom,
    right: targetPosRight,
  } = target?.getBoundingClientRect();
  const tooltipContent = tooltip.querySelector(
    ".tooltip-content"
  ) as HTMLElement;
  const tooltipWidth = tooltipContent.offsetWidth;
  const tooltipHeight = tooltipContent.offsetHeight;

  const tooltipPosTopLeft = {
    x: targetPosLeft * 0.9,
    y: targetPosTop * 0.8,
  };
  const tooltipPosTopRight = {
    x: targetPosRight * 0.9,
    y: targetPosTop * 0.8,
  };
  const tooltipPosBottomLeft = {
    x: targetPosLeft * 0.9,
    y: targetPosBottom * 1.15,
  };
  const tooltipPosBottomRight = {
    x: targetPosRight * 0.9,
    y: targetPosBottom * 1.15,
  };

  if (
    tooltipPosBottomRight.x + tooltipWidth < containerWidth &&
    tooltipPosBottomRight.y + tooltipHeight < containerHeight
  ) {
    setTooltipPos(tooltip, tooltipPosBottomRight.y, tooltipPosBottomRight.x);
    return;
  }
  if (
    tooltipPosBottomRight.x + tooltipWidth > containerWidth &&
    tooltipPosBottomRight.y + tooltipHeight < containerHeight
  ) {
    setTooltipPos(tooltip, tooltipPosBottomLeft.y, tooltipPosBottomLeft.x);
    return;
  }
  if (
    tooltipPosBottomRight.x + tooltipWidth < containerWidth &&
    tooltipPosBottomRight.y + tooltipHeight > containerHeight
  ) {
    setTooltipPos(tooltip, tooltipPosTopRight.y, tooltipPosTopRight.x);
    return;
  }
  if (
    tooltipPosBottomRight.x + tooltipWidth > containerWidth &&
    tooltipPosBottomRight.y + tooltipHeight > containerHeight
  ) {
    setTooltipPos(tooltip, tooltipPosTopLeft.y, tooltipPosTopLeft.x);
    return;
  }
}

function setTooltipPos(
  tooltip: HTMLElement,
  tooltipPosTop: number,
  tooltipPosLeft: number
) {
  const tooltipStyleTop = `${tooltipPosTop?.toFixed(0)}px`;
  const tooltipStyleLeft = `${tooltipPosLeft?.toFixed(0)}px`;
  tooltip.style.top = tooltipStyleTop;
  tooltip.style.left = tooltipStyleLeft;
}

function getOffsetElPos(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: (rect.top + scrollTop)?.toFixed(),
    left: (rect.left + scrollLeft)?.toFixed(),
  };
}
