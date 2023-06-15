const query = `{
    landingPage(id: "1MB6fcm4Q9gnYG0e6iYI94") {
        sys {
          id
        }
        title
        subTitle
        image {
          fileName
          url
        }
        userName
        userImage {
          fileName
          url
        }
      }
}`;

export async function getLandingPage() {
    return await fetch(
      'https://graphql.contentful.com/content/v1/spaces/ss6epxcepnh5/', { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer O4_gliC_xD3IpQE2dvI1wCxrawnXafR4DFX2oVlPuBo",
        },
        body: JSON.stringify({ query })
      }
    ).then(res => res.json());
}
