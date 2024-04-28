const tooltipsContainer: HTMLBodyElement | null = document.querySelector(
  '[data-id="interface-container"]'
);
if (tooltipsContainer) {
  // Add event listeners for both mouse and touch events
  const tooltipsAreas = tooltipsContainer.querySelectorAll("[tooltip-id]");
  console.log({ tooltipsAreas });
  document.querySelectorAll("[tooltip-id]").forEach((element) => {
    element.addEventListener("mouseenter", showTooltip);
    element.addEventListener("touchstart", showTooltip);
  });
}

function createTooltip (content: string): HTMLSpanElement {
  const span = document.createElement('span');
  span.classList.add('interactive-tooltip absolute gold-bordered rounded-[5px] p-[1px]');
  span.innerHTML = `<span class="absolute gold-bordered rounded-[5px] p-[1px]">
            <span class="flex justify-center items-center bg-dark-gold-gradient p-[15px] laptop:p-[30px] shadow rounded-[5px] relative z-30">
              ${content}
              </span>
          </span>`;
  return span
};

function removeTooltip () {
  const tooltips = document.querySelectorAll('.interactive-tooltip');
  tooltips?.forEach(el => el.remove());
}

function showTooltip (e: { target: HTMLElement | null; }) {
  const el:HTMLElement | null = e.target;
  const tooltipID = el?.getAttribute("tooltip-id");
  const tooltipContent = el?.getAttribute("tooltip-content");
  console.log("showTooltip", tooltipID, tooltipContent);
  if(tooltipContent) {
    const tooltip = createTooltip(tooltipContent);
    console.log({tooltip})
    el?.appendChild(tooltip)
  }
};
