"use strict";
const findResponse = (Qtitle, responses) => {
    var _a;
    return (_a = responses.find((x) => x.getItem().getTitle() == Qtitle)) ===
        null || _a === void 0
        ? void 0
        : _a.getResponse().toString();
};
const ExtraerData = (o) => {
    const response = o.response.getItemResponses();
    const preguntaNombreCompleto = findResponse("Nombre Completo", response);
    const folder = DriveApp.getFolderById("1zc9THoRuJOCzUAvbj9XiP_yET7l5BxX-");
    const folder_container = DriveApp.createFolder(`${preguntaNombreCompleto}`);
    folder_container.moveTo(folder);
};
const generateTrigger = () => {
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach((trigger) => {
        ScriptApp.deleteTrigger(trigger);
        Logger.log(trigger.getHandlerFunction());
        Logger.log(`Deleted trigger: ${trigger.getHandlerFunction()}`);
    });
    const form = FormApp.openById("1UwsNfLLvKWBO5QFo0xMDK5k4kq92dJ9PoKPlm80rYMc");
    ScriptApp.newTrigger("ExtraerData").forForm(form).onFormSubmit().create();
};
