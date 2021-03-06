;(function() {
    var app = this;
    app.locale = app.locale || {};

    app.locale.translations = {
        'message.welcome': 'Привіт світ!',
        'errors.system.moduleNotFound': 'Модуль [{moduleId}] не знайдено серед зареєстрованих модулів',
        'errors.system.moduleInstanceNotCreated': 'Конструктор модуля [{moduleId}] не було викликано',
        'errors.system.moduleMethodNotFound': 'У модуля [{moduleId}] не знайдено метод [{methodName}]',
        'errors.system.moduleCreatorNotFunction': 'Для модуля [{moduleId}] creator-функція передана з невірним типом',
        'errors.system.checkTypeNotFound': 'У системі не зареєстровано перевірку: [{0}]',
        'errors.system.applicationNotRun': 'Застосування ще не запущено, або уже зупинене',
        'errors.system.applicationIsAlreadyStarted': 'Застосування вже запущено, ви не можете запустити його знову',
        'core.sandbox.providedTypeNotString': 'Type повинен бути стрічкою',
        'core.sandbox.providedCallBackNotFunction': 'Callback повинен бути функцією',
        'core.sandbox.providedScopeNotAnObject': 'Scope повинен бути об\'єктом',
        'application.started': 'Застосування запущено',
        'application.stopped': 'Застосування зупинено',
        'application.modulesLoaded': 'Модулі завантажено',
        'application.noModulesFoundToLoad': 'Дана сторінка не має модулів для завантаження',
        'application.navigateFromTo': 'Відбувся перехід сторінки з [{from}] до [{to}]',
        'sandbox.subscribedForEvent': 'Підписано на подію: [{eventName}]',
        'sandbox.created': 'Пісочницю створено',
        'sandbox.firedEvent': 'Трапилась подія [{eventName}]. Оновлюю підписників'
    }
}).call(window.app = window.app || /* istanbul ignore next */ {});