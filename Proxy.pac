function FindProxyForURL(url, host) {
    PROXY = "PROXY fwdproxy.pyn.ru:4443” // замените на адрес вашего прокси-сервера и порт

    if (shExpMatch(host, ".chat.openai.com")) {
        return PROXY;
    }

    return "DIRECT";
}
