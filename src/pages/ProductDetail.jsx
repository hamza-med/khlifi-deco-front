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

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product } = useFetch(`/products/${productId}?populate=*`);

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
