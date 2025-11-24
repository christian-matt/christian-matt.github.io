function projectFormatter(id, title, funding, funder, collaborators) {
    let funding_string = funder == null ? ` (${funding}` : ` (${funding} ` + linkFormatter(funder["link"], funder["name"], doi=false, accordion = true);
    var collaborator_string = collaborators.length > 0 ? ", in collaboration with " : ""
    collaborators.forEach((coll, index) => {
        collaborator_string += (index > 0 ? " and ": "") + linkFormatter(coll["link"], coll["name"], doi=false, accordion = true);
    })

    document.getElementById(id).innerHTML += title +
        funding_string +
        collaborator_string +
        ')'
}

projects = [
        {
            "id": "project1",
            "title": "ELCI – Expl(AI)ning Legal Communication of Individuals",
            "funding": "funding as part of the",
            "funder": {"name": "digitalization strategy of the University of Bern", "link": "https://www.digitalisierung.unibe.ch/strategy/index_eng.html"},
            "collaborators": [
                {"name": "Prof. Dr. Florian Eichel", "link": "https://www.civpro.unibe.ch/ueber_uns/personen/prof_dr_eichel_florian/index_ger.html"},
                {"name": "Data Science Lab, UniBE", "link": "https://www.dsl.unibe.ch"}
            ]
        },
        {
            "id": "project2",
            "title": "A Multi-perspective Assessment of Channel-related Unfairness in Voice Assistants",
            "funding": "SNSF project funding",
            "funder": null,
            "collaborators": []
        },
        {
            "id": "project3",
            "title": "Algorithmic Management – Establishing Fair and Participative Shift Planning in Healthcare",
            "funding": "funding as part of the",
            "funder": {"name": "digitalization strategy of the University of Bern", "link": "https://www.digitalisierung.unibe.ch/strategy/index_eng.html"},
            "collaborators": [{"name": "Prof. Dr. Philipp Baumann", "link": "https://www.pqm.unibe.ch/about_us/people/prof_dr_baumann_philipp/"}]
        },
        {
            "id": "project4",
            "title": "Digital Support for Legal Users in Specialized Legal Domains—Legal and Application-related Requirements",
            "funding": "SNSF project funding",
            "funder": null,
            "collaborators": [{"name": "Prof. Dr. Florian Eichel", "link": "https://www.civpro.unibe.ch/ueber_uns/personen/prof_dr_eichel_florian/index_ger.html"}]
        },
        {
            "id": "project5",
            "title": "Debunking a Data-driven World",
            "funding": "funded by BeLEARN",
            "funder": null,
            "collaborators": [{"name": "Prof. Dr. Ferdinand Thies", "link": "https://www.bfh.ch/de/ueber-die-bfh/personen/ruhpw6txjfpd/"}]

        }
    ]


projects.forEach((project) => {
        projectFormatter(
            id=project["id"],
            title=project["title"],
            funding=project["funding"],
            funder=project["funder"],
            collaborators=project["collaborators"]
        );
    }
)