(function () {
    const paramName = "q";

    const url = new URL(location);
    const search = url.searchParams.get(paramName);

    if (search === null || search.toLowerCase().indexOf("malternativ") !== -1) {
        return;
    }

    url.searchParams.set(paramName, search + " Malternativ");
    location.href = url.href;
}());
