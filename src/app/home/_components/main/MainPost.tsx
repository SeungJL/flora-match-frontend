function ProductGrid() {
  // 이곳에 실제 상품 데이터를 불러와 매핑하게 될 것입니다.
  const products = [
    {
      id: "",
      imageUrl: "a",
      name: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg bg-white p-2 shadow-md">
          {/* <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-t-lg"
          /> */}
          <div className="p-2">
            <h3 className="text-lg font-bold">{product.name}</h3>
            {/* 추가 상품 정보 */}
          </div>
        </div>
      ))}
    </div>
  );
}

function StoreInfoCard() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
      {/* <img src="/path-to-your-logo.png" alt="Store Logo" className="h-12 w-12" /> */}
      <div>
        <p className="text-lg font-bold">오나빌라워</p>
        <p className="text-sm">⭐ 5.0 (11) | 1.2km</p>
        <p className="text-sm">배달비 1,000원~</p>
      </div>
    </div>
  );
}

// 상위 컴포넌트인 App 내에서 사용됩니다.
function MainPost() {
  return (
    <div>
      {/* 다른 컴포넌트들 */}
      <ProductGrid />
      <StoreInfoCard />
      {/* 다른 컴포넌트들 */}
    </div>
  );
}

export default MainPost;
