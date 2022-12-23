import Header from "./componentes/header";
import Card from "./componentes/card";
import Footer from "./componentes/footer";

const App = () => {

  return (
    <>
      <Header title="Galeria de Imagenes">
      </Header>
        <div className="images-container">
          <Card cardtitulo="Montañas" cardDescripcion="Una montaña es una forma topográfica del relieve terrestre positiva..." imgUrl="https://i.picsum.photos/id/558/200/300.jpg?hmac=RQvEcTitB2RoOqzwdtXcjckM1FybfSHIq676zecLvkw" btn="Mas informacion"></Card>
          <Card cardtitulo="Lago" cardDescripcion="Un lago es “una masa de agua continental superficial quieta”, cuya superficie supera las 50 ha..." imgUrl="https://i.picsum.photos/id/588/200/300.jpg?hmac=Bb5mvfvSw-sKhocAA4Mfdb78ysl5ktbClTt-Lc0IyWk" btn="Mas informacion"></Card>
          <Card cardtitulo="Disco de Vinilo" cardDescripcion="El disco de vinilo es un medio de almacenamiento analógico de señales sonoras, caracterizado por utilizar como material de soporte un plástico denominado policloruro de vinilo..." imgUrl="https://i.picsum.photos/id/39/200/300.jpg?hmac=CcUiRU6-82MldMqtiF9shpKCbwzwkILEWuRi90JsADs" btn="Mas informacion"></Card>
          <Card cardtitulo="Playa" cardDescripcion="Una playa es un accidente geográfico junto a una masa de agua que consta de partículas sueltas..." imgUrl="https://i.picsum.photos/id/92/200/300.jpg?hmac=9Eq_kpOk-5TZ2YHExdgGL_iYGHpJNmvUogSdSuZzGYE" btn="Mas informacion"></Card>
        </div>
      <Footer></Footer>
    
    </>
  );
};

export default App;

