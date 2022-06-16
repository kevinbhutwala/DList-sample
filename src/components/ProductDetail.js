import { useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";

const ProductDetail = (props) => {
  const [alwaysInPlace, setalwaysInPlace] = useState("");
  const [overlayOpacity, setoverlayOpacity] = useState("");
  const [switchSides, setswitchSides] = useState("");
  const [fillAvailableSpace, setfillAvailableSpace] = useState("");
  const [fillAlignTop, setfillAlignTop] = useState("");
  const [fillGapLeft, setfillGapLeft] = useState("");
  const [fillGapRight, setfillGapRight] = useState("");
  const [fillGapTop, setfillGapTop] = useState("");
  const [fillGapBottom, setfillGapBottom] = useState("");

  return (
    <div className="container container-main">
      <div className="flex">
        <SideBySideMagnifier
          transitionSpeed={0.2}
          className="input-position"
          style={{ order: switchSides ? "1" : "0",width:"80%"}}
          imageSrc={'https://cdn.shopify.com/s/files/1/0057/0736/6467/products/white_gold_.25cct_3_960x.jpg?v=1628004605'}
          largeImageSrc={'https://cdn.shopify.com/s/files/1/0057/0736/6467/products/white_gold_.25cct_3_960x.jpg?v=1628004605'}
          fillAvailableSpace={fillAvailableSpace}          
          zoomContainerBorder="1px solid #ccc"
          zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
          alwaysInPlace={alwaysInPlace}
          overlayOpacity={overlayOpacity}
          switchSides={switchSides}
          // zoomPosition="left"
          inPlaceMinBreakpoint={641}
          fillAlignTop={fillAlignTop}
          fillGapTop={fillGapTop}
          fillGapRight={fillGapRight}
          fillGapBottom={fillGapBottom}
          fillGapLeft={fillGapLeft}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
