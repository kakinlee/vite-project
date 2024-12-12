import './card.scss'; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
function Card() {
  const products = [
    {
      "id": 1,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2020/07/%E8%96%AF%E6%B3%A5-300x300.jpg.webp",
      "title": "鴨油薯泥",
      "description": "以綿密馬鈴薯與濃郁鴨油拌合，加入香草與奶油調味，打造出法國傳統風味濃郁的副菜，完美搭配各式燉肉料理。",
      "price": 200,
      "origin": 300
    },
    {
      "id": 2,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2021/10/20211002-%E9%A3%B2%E7%9B%A1%E4%B8%80%E6%98%A5%E5%A4%A9%E7%9A%84%E6%B3%95%E5%9C%8B%E8%A9%A9%E6%84%8F-01-300x300.jpg.webp",
      "title": "馬鈴薯大蔥濃湯(五辛奶素)",
      "description": "將馬鈴薯與嫩滑大蔥熬煮成絲滑濃湯，加入鮮奶油調和，口感溫潤，適合全素者享用。",
      "price": 250,
      "origin": 350
    },
    {
      "id": 3,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2019/11/%E9%A6%99%E6%96%99%E7%87%89%E4%B8%B8%E5%AD%90-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "香料燉丸子",
      "description": "豬牛混合肉丸搭配迷迭香、百里香等香料，燉煮至入味，番茄醬汁濃郁，佐餐麵包尤為美味。",
      "price": 500,
      "origin": 600
    },
    {
      "id": 4,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2023/12/S__61767816_0-e1703731928611-300x300.jpg.webp",
      "title": "香啤燉軟排",
      "description": "豬肋排以香啤與蔬菜慢燉，肉質酥嫩，醬汁散發麥芽香氣，是法國鄉村家庭料理的經典。",
      "price": 560,
      "origin": 660
    },
    {
      "id": 5,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2020/04/%E8%B1%86%E6%B9%AF-%E4%B8%BB%E5%9C%963-300x300.jpg.webp",
      "title": "豆泥菜肉湯",
      "description": "混合各式根莖蔬菜與濃郁豆泥燉煮，加入熏肉片提味，口感濃稠，滿足感十足。",
      "price": 300,
      "origin": 400
    },
    {
      "id": 6,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2022/04/%E6%B4%8B%E8%94%A5%E6%B9%AF-3-300x300.jpg.webp",
      "title": "經典洋蔥湯",
      "description": "慢炒洋蔥至金黃，加入肉湯與白葡萄酒燉煮，佐以烤芝士麵包，風味層次豐富。",
      "price": 350,
      "origin": 450
    },
    {
      "id": 7,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2020/04/%E7%B4%85%E9%9B%9E-%E4%B8%BB%E5%9C%96-1-300x300.jpg.webp",
      "title": "紅酒燉雞",
      "description": "雞肉配搭紅酒與洋蔥、蘑菇燉煮，醬汁濃郁，酒香與肉香相得益彰。",
      "price": 600,
      "origin": 700
    },
    {
      "id": 8,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2019/11/%E7%B4%85%E7%89%9B-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "紅酒燉牛肉",
      "description": "牛肉塊慢燉於紅酒與香草蔬菜中，肉質軟嫩，醬汁濃稠，是法式餐桌的經典主菜。",
      "price": 700,
      "origin": 800
    },
    {
      "id": 9,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2021/09/%E5%A5%B6%E9%9B%9E-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "牛肝菌奶油燉雞",
      "description": "以牛肝菌提升雞肉風味，奶油濃湯佐以白酒調味，呈現濃郁又不膩口的精緻滋味。",
      "price": 700,
      "origin": 800
    },
    {
      "id": 10,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2020/03/%E9%85%B8%E7%94%9C%E6%B4%8B%E8%94%A5-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "法式三色酸甜洋蔥醬",
      "description": "結合紅洋蔥、黃洋蔥與青洋蔥，加入葡萄酒醋與糖燉煮，酸甜適中，適合作為烤肉佐醬。",
      "price": 500,
      "origin": 600
    },
    {
      "id": 11,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2019/10/%E6%91%A9%E6%B4%9B%E5%93%A5%E7%BE%94%E7%BE%8A-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "摩洛哥燉羔羊",
      "description": "以小茴香、肉桂與番紅花等香料燉煮羔羊肉，融入乾果與堅果，風味濃郁異國。",
      "price": 499,
      "origin": 599
    },
    {
      "id": 12,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2019/11/%E7%93%9C%E6%B9%AF-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "奶油起司南瓜濃湯",
      "description": "嫩甜南瓜與奶油、起司調和成絲滑濃湯，乳香與自然甜味完美融合。",
      "price": 400,
      "origin": 500
    },
    {
      "id": 13,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2021/08/%E5%8D%97%E6%B3%95%E8%94%AC%E8%8F%9C%E9%BA%B5%E6%B9%AF-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "南法蔬菜麵湯(五辛素)",
      "description": "結合法國南部新鮮蔬菜與義大利麵，湯底以番茄和香料調製，清新而滿足。",
      "price": 300,
      "origin": 400
    },
    {
      "id": 14,
      "category": "food",
      "imageUrl": "https://simonenainai.com/wp-content/webp-express/webp-images/uploads/2022/04/%E8%8F%9C%E6%B9%AF-%E4%B8%BB%E5%9C%96-300x300.jpg.webp",
      "title": "什錦蔬菜湯",
      "description": "各式季節蔬菜混合燉煮，保留原味，湯底清爽健康，是法國日常餐桌上的輕食。",
      "price": 300,
      "origin": 400
    }
  ]; // Add your products array here

  return (
    <div>
      <p className="categories_titel">最新上架</p>
      <div className="products_list">
        {/* swiper */}
        <Swiper slidesPerView =  {4} loop={true} pagination={true}  navigation={true} modules={[Navigation,Pagination]} className="swiper-container">
       
          {products.map((product) => (
             <SwiperSlide> 
            <div className="swiper-slide" key={product.id}>
              <div className="categories">{product.category}</div>
              <img src={product.imageUrl} alt="" />
              <div className="title">{product.title}</div>
              <p className="intro">{product.description}</p>
              <div className="price">
                <div className="onsale_price">NT{product.price}元</div>
                <div className="ori_price">原價{product.origin}元</div>
              </div>
              
              {/* <div className="more">
                {product.is_enabled ? (
                  <a href={`/categories/${product.id}`} className="read_more">詳細介紹</a>
                ) : (
                  <div className="add_cart">已售完</div>
                )}
                {product.is_enabled && (
                  <div className="add_cart" onClick={() => addtoCart(product.id, product.title)}>加入購物車</div>
                )}
              </div> */}
            </div>
            
        <div className="swiper-pagination" slot="pagination"></div>
        </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
}

export default Card;
