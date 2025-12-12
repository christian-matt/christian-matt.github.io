function citationFormatter(id, authors, year, article_title, journal, volume, issue, pages, doi, doi_label) {
    document.getElementById(id).innerHTML += authors +
        ` (${year}): ` +
        article_title + ',' +
        ` <i class="accordion-list-item">${journal}</i>` +
        ` (${volume}` + (issue === null ? "" : `:${issue}`) + `),` +
        (pages.includes("-") ? ` pp. ${pages}`: ` ${pages}`) +
        linkFormatter(doi, doi_label, doi=true, accordion = true) +
        '.'
}

articles = [
    {
        "id": "publication2",
        "authors": "Ebrahimi, S.; Matt, C.",
        "year": 2024,
        "article_title": "Not Seeing the (Moral) Forest for the Trees? How Task Complexity and Employees’ Expertise Affect Moral Disengagement with Discriminatory Data Analytics Recommendations",
        "journal": "Journal of Information Technology",
        "volume": 39,
        "issue": 3,
        "pages": "477-502",
        "doi": "10.1177/02683962231181148",
        "doi_label": "10.1177/02683962231181148"
    },
    {
        "id": "publication3",
        "authors": "Lehrer, C.; Constantinou, I.; Matt, C.; Hess, T.",
        "year": 2023,
        "article_title": "How Ephemerality Features Affect User Engagement with Social Media",
        "journal": "MIS Quarterly",
        "volume": 47,
        "issue": 4,
        "pages": "1663-1678",
        "doi": "10.25300/MISQ/2023/17085",
        "doi_label": "10.25300/MISQ/2023/17085"
    },
    {
        "id": "publication4",
        "authors": "Lüthi, N.; Matt, C.; Myrach, T.; Junglas, I.",
        "year": 2023,
        "article_title": "Augmented Intelligence, Augmented Responsibility?",
        "journal": "Business & Information Systems Engineering",
        "volume": 65,
        "issue": 4,
        "pages": "391-401",
        "doi": "10.1007/s12599-023-00789-9",
        "doi_label": "10.1007/s12599-023-00789-9"
    },
    {
        "id": "publication5",
        "authors": "Bründl, S.; Matt, C.; Hess, T.; Engert, S.",
        "year": 2023,
        "article_title": "How Synchronous Participation Affects the Willingness to Subscribe to Social Live Streaming Services: The Role of Co-Interactive Behavior on Twitch",
        "journal": "European Journal of Information Systems",
        "volume": 32,
        "issue": 5,
        "pages": "800-817",
        "doi": "10.1080/0960085X.2022.2062468",
        "doi_label": "10.1080/0960085X.2022.&shy;2062468"
    },
    {
        "id": "publication6",
        "authors": "Turel, O.; Matt, C.; Trenz, M.; Cheung, CMK.",
        "year": 2020,
        "article_title": "An Intertwined Perspective on Technology and Digitised Individuals: Linkages, Needs and Outcomes",
        "journal": "Information Systems Journal",
        "volume": 30,
        "issue": 6,
        "pages": "929-939",
        "doi": "10.1111/isj.12304",
        "doi_label": "10.1111/isj.&shy;12304"
    },
    {
        "id": "publication1",
        "authors": "Wurm, B.; Matt, C.; Benlian, A.; Hess, T.",
        "year": 2025,
        "article_title": "A Revised Framework for Digital Transformation Strategies: Contemporary Insights and Future Research Pathways",
        "journal": "Electronic Markets",
        "volume": "35",
        "issue": null,
        "pages": "99",
        "doi": "10.1007/s12525-025-00838-z",
        "doi_label": "10.1007/s12525-025-00838-z"
    }
]


articles.forEach((article) => {
        citationFormatter(
            id=article["id"],
            authors=article["authors"],
            year=article["year"],
            article_title=article["article_title"],
            journal=article["journal"],
            volume=article["volume"],
            issue=article["issue"],
            pages=article["pages"],
            doi=article["doi"],
            doi_label=article["doi_label"]
        );
    }
)
