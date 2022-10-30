function getArticleGenerator(articles) {
    let articless = articles;
    return () => {
        while (articless.length > 0) {
            let contentElement = document.querySelector("#content");
            let article = document.createElement("article");
            article.textContent = articless.shift();
            return contentElement.appendChild(article);
        }
    };
}
