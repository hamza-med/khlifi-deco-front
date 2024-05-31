import useFetch from "@/hooks/useFetch";
import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const LinksBar = lazy(() => import("@/components/ProductDetail/LinksBar"));
const ProductInfo = lazy(() =>
  import("@/components/ProductDetail/ProductInfo")
);
const RelatedProducts = lazy(() =>
  import("@/components/ProductDetail/RelatedProducts")
);
const images = ["img", "img2", "img3"];
const imgQuery = images
  .map(
    (img) => `populate[${img}][fields][0]=name&populate[${img}][fields][1]=url&`
  )
  .join("");

const catSubCatQuery =
  "populate[categories][fields][0]=title&populate[sub_categories][fields][0]=title";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product } = useFetch(
    `/products/${productId}?${imgQuery}${catSubCatQuery}`
  );

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <LinksBar
          prodName={product?.attributes?.title}
          catData={product?.attributes?.categories?.data[0]}
          subData={product?.attributes?.sub_categories?.data[0]}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <ProductInfo prodData={product?.attributes} prodId={product?.id} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <RelatedProducts
          prodId={product?.id}
          subCatId={product?.attributes?.sub_categories?.data[0]?.id}
        />
      </Suspense>
    </div>
  );
};

export default ProductDetail;
