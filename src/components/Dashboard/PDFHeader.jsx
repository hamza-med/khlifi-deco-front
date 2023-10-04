import { HStack } from "@chakra-ui/react"


const PDFHeader = () => {
  return (
    <div className="pdfFile__header">
          <div className="header-left">
            <h1>khelifi youssef</h1>
            <HStack fontSize="1.2rem">
              <p>Adresse:</p>
              <span>10,Rue Le HRAIRIA, Ezzouhour 4, Tunis</span>
            </HStack>
            <HStack fontSize="1.2rem">
              <p>Téléphone:</p>
              <span>+216 25.444.730</span>
              <span>+216 98.266.781</span>
            </HStack>
            <HStack fontSize="1.2rem">
              <p>E-mail:</p>
              <span>khlifilocation@gmail.com</span>
            </HStack>
            <HStack fontSize="1.2rem">
              <p>Page FB:</p>
              <span>KHLIFI-Décor de marriage & événementiel</span>
            </HStack>
          </div>
          <div className="header-right">
            <h1>Devis</h1>
          </div>
        </div>
  )
}

export default PDFHeader