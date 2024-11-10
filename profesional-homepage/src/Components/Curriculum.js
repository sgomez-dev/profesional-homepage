import React from "react";

const PDF_FILE = "/CV_Santiago.pdf"
export const Curriculum = () => {

  const downloadFile = (url) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement("a")
    aTag.href = url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className="page">
      <h1 className="heading">Curriculum</h1>
      <p>A continuación, puedes ver una vista previa de mi currículum:</p>

      <p className="pdf-detail">La pantalla es muy pequeña como para previsualizar el archivo, por favor descargalo para verlo de la mejor manera.</p>
      <div className="pdf-content">
        <object
            data={require('../data/CV_Santiago.pdf')}
            type='application/pdf'
            width="75%"
            height="100%"
        >
        </object>
      </div>
      <button onClick={() => downloadFile(PDF_FILE)} className="cv-download">Descargar CV</button>
    </div>
  );
};
