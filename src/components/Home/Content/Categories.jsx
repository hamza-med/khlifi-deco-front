const Categories = () => {
  return (
    <div className="home-categories">
      <h1 className="home-categories__title">explorer par catégorie</h1>
      <p className="home-categories__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima
        dolorum modi similique animi quas labore ab reiciendis, nisi consequatur
        omnis et dignissimos neque delectus odit, quo laboriosam vitae facilis?
      </p>
      <div className="home-categories__images">
        <div className="home-categories__images--item">
          <img
            src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img1"
          />
          <h2>Mobilier</h2>
        </div>
        <div className="home-categories__images--item">
          <img
            src="https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img2"
          />
          <h2>Accessoires</h2>
        </div>
        <div className="home-categories__images--item">
          <img
            src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img3"
          />
          <h2>Tentes & Abris</h2>
        </div>
        <div className="home-categories__images--item">
          <img
            src="https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img4"
          />
          <h2>Cloisons</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
