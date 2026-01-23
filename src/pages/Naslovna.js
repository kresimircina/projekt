import { useState, useEffect } from "react"


const Naslovna = () => {
 
    const [page, setPages] = useState(null);

        useEffect(
        
            () => {
            fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/pages/178')
            .then(response => response.json())
            .then(
                (data) => {
                    setPage(data);
                }
            )

        }, []
    )

    if(!page) return <p>Učitavanje</p>

    return (

    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
  )
}

export default Naslovna