import { usePrivateFetch } from "@/hooks/useFetch";
import OrdersTable from "./OrdersTable";
import { HStack } from "@chakra-ui/react";

const PDFFile = ({ date }) => {
  console.log("date: " + date.toDateString());
  const { data: orders, meta } = usePrivateFetch(
    `orders?[filters][creationDate][$eq]=${date
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );
  const pagesArray = Array(meta?.pagination?.pageCount)
    .fill()
    .map((_, index) => index + 1);
  return (
    <div id="file-to-export" className="pdfFile__wrapper">
      <div className="pdfFile__header">
        <div className="header-left">
          <h1>khelifi youssef</h1>
          <HStack>
            <p>Adresse:</p>
            <span>10,Rue Le HRAIRIA, Ezzouhour 4, Tunis</span>
          </HStack>
          <HStack>
            <p>Téléphone:</p>
            <span>+216 25.444.730</span>
            <span>+216 98.266.781</span>
          </HStack>
          <HStack>
            <p>E-mail:</p>
            <span>khlifilocation@gmail.com</span>
          </HStack>
          <HStack>
            <p>Page FB:</p>
            <span>KHLIFI-Décor de marriage & événementiel</span>
          </HStack>
        </div>
        <div className="header-right">
          <h1>Devis</h1>
        </div>
      </div>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default PDFFile;
