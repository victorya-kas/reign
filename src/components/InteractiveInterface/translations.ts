import type { translations } from "@ts/types";
type InteractiveGalleryContent = {
  title: string;
  content: string;
} | string;

export const interactiveInterfaceTr: translations<InteractiveGalleryContent> = {
  en: {
    "btn-timer": {
      title: "Main time per turn",
      content:
        "The renewable time for a specific stage for each player. When it ends, extra time is spent.",
    },
    "btn-sm-timer": {
      title: "Extra time per turn",
      content:
        "The additional time, which is used if the main time has run out. If the extra time was spent as well as the main time, the turn ends automatically.",
    },
    "btn-settings": {
      title: "Settings",
      content: "Opens the settings panel with the option to leave the game.",
    },
    "header-heroes": {
      title: "Hero status panel",
      content:
        "Displays the list of the heroes and the status of abilities that are applied to them. It allows you to look at their description at any moment of the game.",
    },
    "statistics": {
      title: "Player statistics",
      content:
        "Displays players' current amount of coins, cards, influence, disciples.",
    },
    "player-name": {
      title: "Player name",
      content:
        "Displays the player's name, his position on the board does not change.",
    },
    "hero-card-cover": {
      title: "Unknown hero",
      content:
        "Demonstrates that the player has chosen a hero, but the hero's turn has not come yet.",
    },
    "hero-card": {
      title: "Revealed hero",
      content:
        "When a certain hero's turn comes, that hero is revealed to all the players.",
    },
    "hero-order": {
      title: "Heroes' turn order",
      content: "Displays the sequence of the heroes' turns.",
    },
    "hero-flag": {
      title: "Effect on the hero",
      content: "Displays the effects of abilities on heroes.",
    },
    "follower-card-sm": {
      title: "Recruited disciple",
      content:
        "As soon as a player spends coins to recruit a disciple, that disciple goes under the player's control and the disciple's abilities take effect.",
    },
    "follower-value": {
      title: "Cost of the disciple",
      content:
        "Displays the disciple's cost and the basic amount of influence this disciple will bring to their owner.",
    },
    "btn-ability-intelligence": {
      title: "Hero's active ability",
      content: "Activates the hero's ability. Once per round.",
    },
    "btn-resourses": {
      title: "Resources",
      content: "Allows you to get resources. Once per round.",
    },
    "followers-hand": {
      title: "Hand",
      content: "Displays the cards that the player currently have.",
    }
  },
  ru: {
    "btn-timer": {
      title: "Основное время на ход",
      content:
        "Обновляемое время на конкретный этап для каждого игрока, по истечении которого будет расходоваться резервное время.",
    },
    "btn-sm-timer": {
      title: "Резервное время на ход",
      content:
        "Расходуемое время каждого игрока, которое используется, если закончилось основное время. Если резервное время было потрачено вместе с основным, то ход завершается автоматически.",
    },
    "btn-settings": {
      title: "Настройки",
      content: "Открывает панель настроек и возможность покинуть игру.",
    },
    "header-heroes": {
      title: "Панель статусов героев",
      content:
        "Отображает список героев и статус применённых на них способностей, позволяет просмотреть их описание в любой момент игры.",
    },
    statistics: {
      title: "Статистика игрока",
      content:
        "Отображает актуальное количество монет, карт, влияния, последователей у игроков.",
    },
    "player-name": {
      title: "Имя игрока",
      content: "Отображает имя игрока, его позиция на поле не меняется.",
    },
    "hero-card-cover": {
      title: "Неизвестный герой",
      content:
        "Демонстрирует, что игрок выбрал героя, но очередь хода этого героя ещё не наступила.",
    },
    "hero-card": {
      title: "Открытый герой",
      content:
        "Когда наступает ход определённого героя, он раскрывается для всех игроков.",
    },
    "hero-order": {
      title: "Порядок хода героев",
      content: "Отображает последовательность хода героев.",
    },
    "hero-flag": {
      title: "Эффект на герое",
      content: "Отображает эффекты способностей на героях.",
    },
    "follower-card-sm": {
      title: "Нанятый последователь",
      content:
        "Как только игрок тратит монеты на наём последователя, он переходит под контроль этого игрока, и его способности начинают действовать.",
    },
    "follower-value": {
      title: "Стоимость последователя",
      content:
        "Отображает стоимость последователя и базовое количество влияния, что он принесёт владельцу.",
    },
    "btn-ability-intelligence": {
      title: "Активная способность героя",
      content: "Активирует способность героя. Раз за круг.",
    },
    "btn-resourses": {
      title: "Ресурсы",
      content: "Позволяет получить ресурсы. Раз за круг.",
    },
    "followers-hand": {
      title: "Рука",
      content: "Отображает карты, которые имеются у игрока в данный момент.",
    }
  },
};
