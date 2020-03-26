({
    invoke: function(component, event, helper) {
        // [XXXX; YYYY; ZZZZ] <- のようにデータが入ってくるので、半角スペースを消してセミコロンでスプリットして配列化する
		let splited = component.get("v.Request").replace(' ','').split(';');
        component.set("v.Response", splited);
    }
})
