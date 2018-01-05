"use strict";
/// <reference path='../../../types-gt-mp/Definitions/index.d.ts' />
var actor_text_mode = 0;
API.onServerEventTrigger.connect((eventName, args) => {
    switch (eventName) {
        case "ShowActorText":
            actor_text_mode = args[0];
            break;
    }
});
API.onKeyUp.connect((sender, e) => {
    if (e.KeyCode === Keys.E) {
        if (!API.getCefBrowserHeadless(resource.DialogController.dlgBrowser))
            return;
        if (actor_text_mode == 1)
            API.triggerServerEvent("ActorInteract");
    }
});
API.onServerEventTrigger.connect((eventName, args) => {
    if (eventName == "ShowActorDialogue") {
        resource.DialogController.ShowNpcDialog(args[0], args[1]);
    }
});
API.onUpdate.connect(() => {
    if (actor_text_mode == 1)
        API.displaySubtitle("Pressione ~y~E ~w~para interagir", 100);
});
