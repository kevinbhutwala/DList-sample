import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/diamond.gif";
import LoadingSpinner from "./LoadingSpinner";

const DiamondLists = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [Pfrom, setPFrom] = useState("139.75");
  const [Pto, setPTo] = useState("999999.99");

  const [Cfrom, setCFrom] = useState("0.5");
  const [Cto, setCTo] = useState("22.51");

  const [Tfrom, setTFrom] = useState("49.5");
  const [Tto, setTTo] = useState("81.5");

  const [Dfrom, setDFrom] = useState("55.2");
  const [Dto, setDTo] = useState("76.9");

  const [shapeId, setShapeId] = useState([]);
  const shapes = [
    {
      id: 1,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Round.png",
      ShapeName: "Round",
    },
    {
      id: 9,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Asscher.png",
      ShapeName: "Asscher",
    },
    {
      id: 5,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Oval.png",
      ShapeName: "Oval",
    },
    {
      id: 3,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Heart.png",
      ShapeName: "Heart",
    },
    {
      id: 6,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Cushion.png",
      ShapeName: "Cushion",
    },
    {
      id: 7,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Emerald.png",
      ShapeName: "Emerald",
    },
    {
      id: 8,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Marquise.png",
      ShapeName: "Marquise",
    },
    {
      id: 2,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Pear.png",
      ShapeName: "Pear",
    },
    {
      id: 10,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Radiant.png",
      ShapeName: "Radiant",
    },
    {
      id: 4,
      img: "https://laravel.weingenious.in/bellamy/public/assets/customer/images/diamond-shape/Princess.png",
      ShapeName: "Princess",
    },
  ];

  const [ClarityId, setClarityId] = useState([]);

  const Clarity=[
    {
      id: 11,
      ClarityName : "FL",
    },
    {
      id: 12,
      ClarityName : "IF",
    },
    {
      id: 9,
      ClarityName : "VVS1",
    },
    {
      id: 10,
      ClarityName : "VVS2",
    },
    {
      id: 8,
      ClarityName : "VS1",
    },
    {
      id: 7,
      ClarityName : "VS2",
    },
    {
      id: 1,
      ClarityName : "S11",
    },
    {
      id: 2,
      ClarityName : "S12",
    },
    {
      id: 3,
      ClarityName : "S13",
    },
    {
      id: 4,
      ClarityName : "I1",
    },
    {
      id: 5,
      ClarityName : "I2",
    },
    {
      id: 6,
      ClarityName : "I3",
    },
  ];

  const [ColorId, setColorId] = useState([]);
  const [Color, setColor] = useState([
    {
      id: 1,
      title: "D",
    },
    {
      id: 2,
      title: "E",
    },
    {
      id: 3,
      title: "F",
    },
    {
      id: 4,
      title: "G",
    },
    {
      id: 5,
      title: "H",
    },
    {
      id: 6,
      title: "I",
    },
    {
      id: 7,
      title: "J",
    },
    {
      id: 8,
      title: "K",
    },
    {
      id: 9,
      title: "L",
    },
    {
      id: 10,
      title: "M",
    },
    {
      id: 11,
      title: "N",
    },
  ]);

  const [CutId, setCutId] = useState([]);
  const [Cut, setCut] = useState([
    {
      id: 52,
      title: "G",
    },
    {
      id: 53,
      title: "VG",
    },
    {
      id: 54,
      title: "GD",
    },
    {
      id: 135,
      title: "FR",
    },
  ]);

  const [SymId, setSymId] = useState([]);
  const [Sym, setSym] = useState([
    {
      id: 58,
      title: "EX",
    },
    {
      id: 59,
      title: "VG",
    },
    {
      id: 60,
      title: "GD",
    },
    {
      id: 183,
      title: "ID",
    },
  ]);

  const [FluorescenceId, setFluorescenceId] = useState("");
  const [Fluorescence, setFluorescence] = useState([
    {
      id: 61,
      title: "NONE",
    },
    {
      id: 62,
      title: "FAINT",
    },
    {
      id: 63,
      title: "SLIGHT",
    },
    {
      id: 64,
      title: "MEDIUM",
    },
    {
      id: 65,
      title: "STRONG",
    },
  ]);

  const [PolishId, setPolishId] = useState([]);
  const [Polish, setPolish] = useState([
    {
      id: 55,
      title: "EX",
    },
    {
      id: 56,
      title: "VG",
    },
    {
      id: 57,
      title: "GD",
    },
  ]);

  const [LabId, setLabId] = useState([]);
  const [Lab, setLab] = useState([
    {
      id: 66,
      title: "GIA",
    },
    {
      id: 67,
      title: "IGI",
    },
    {
      id: 68,
      title: "HRD",
    },
    {
      id: 69,
      title: "AGS",
    },
  ]);

  const [selectedDiaType, setSelectedDiaType] = useState("");

  const [DiaType, setDiaType] = useState([
    {
      id: 66,
      title: "Natural",
      name: "Natural",
    },
    {
      id: 67,
      title: "Lab",
      name: "Lab Down",
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        `https://laravel.weingenious.in/bellamy/api/diamonds?1=1&page=1&sort=1&j=0`
        // `https://laravel.weingenious.in/nwdlwt/api/diamonds?1=1&page=1&sort=1&j=0
        // &min=${Pfrom}&max=${Pto}&CaratMin=${Cfrom}&CaratMax=${Cto}
        // &TableMin=${Tfrom}&TableMax=${Tto}&DepthMin=${Dfrom}&DepthMax=${Dto}
        // ${shapeId?.length > 0 ? `&Shape=${shapeId}` : []}
        // ${ClarityId?.length > 0 ? `&Clarity=${ClarityId}` : []}
        // ${ColorId?.length > 0 ? `&Color=${ColorId}` : []}
        // ${CutId?.length > 0 ? `&Cut=${CutId}` : []}
        // ${SymId?.length > 0 ? `&Sym=${SymId}` : []}
        // ${LabId?.length > 0 ? `&Lab=${LabId}` : []}
        // ${PolishId.length > 0 ? `&Polish=${PolishId}` : []}
        // ${FluorescenceId.length > 0 ? `&Flour=${FluorescenceId}` : []}
        // ${selectedDiaType != "" ? `&DiaType=${selectedDiaType}` : ""}`
      )
      .then((json) => {
        console.log("jason", json.config.url);
        console.log("jason", json.data.data);
        setItems(json.data.data);
        setListFilter(json.data.data);
        setIsLoading(false);
      });
  }, [
    shapeId,
    ClarityId,
    ColorId,
    CutId,
    SymId,
    LabId,
    PolishId,
    FluorescenceId,
    selectedDiaType,
    Pfrom,
    Pto,
    Cfrom,
    Cto,
    Tfrom,
    Tto,
    Dto,
    Dfrom,
  ]);

  const [selectedPolish, setSelectedPolish] = useState([]);

  const handlePolish = (item) => {
    let array = [...selectedPolish];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let polishid = array.map((item) => {
      return item.id;
    });
    setPolishId(polishid);
    setSelectedPolish(array);
  };

  const [selectedFluorescence, setSelectedFluorescence] = useState([]);

  const handleFluorescence = (item) => {
    let array = [...selectedFluorescence];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let FluorescenceId = array.map((item) => {
      return item.id;
    });
    setFluorescenceId(FluorescenceId);
    setSelectedFluorescence(array);
  };

  const [selectedShape, setSelectedShape] = useState([]);

  const [listFilter, setListFilter] = useState([]);

  const handleShape = (item) => {
    let dataCopy = [];

    let array = [...selectedShape];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    setSelectedShape(array);

    if (array.length > 0) {
      array.map((iteme) => {
        listFilter.map((itemd) => {
          if (iteme?.ShapeName == itemd?.ShapeName) {
            dataCopy = [...dataCopy, itemd];
          }
        });
      });

      setItems([...dataCopy]);
    } else {
      setItems([...listFilter]);
    }
  };

  const [selectedClarity, setSelectedClarity] = useState([]);

  const handleClarity = (item) => {
    let dataCopy = [];

    let array = [...selectedClarity];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    setSelectedClarity(array);

    if (array.length > 0) {
      array.map((iteme) => {
        console.log("iteme?.ClarityName",iteme?.ClarityName);
        items.map((itemd) => {
          console.log("iitemd",itemd?.ClarityName);

          if (iteme?.ClarityName == itemd?.ClarityName) {
            dataCopy = [...dataCopy, itemd];
          }
        });
      });

      setItems([...dataCopy]);
    } else {
      setItems([...listFilter]);
    }

    // let array = [...selectedClarity];
    // let selectedIndex = array.findIndex((d) => d.id == item.id);
    // if (array?.length > 0 && selectedIndex >= 0) {
    //   array.splice(selectedIndex, 1);
    // } else {
    //   array.push(item);
    // }
    // let ClarityId = array.map((item) => {
    //   return item.id;
    // });
    // setClarityId(ClarityId);
    // setSelectedClarity(array);
  };

  const [selectedColor, setSelectedColor] = useState([]);

  const handleColor = (item) => {
    let array = [...selectedColor];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let ColorId = array.map((item) => {
      return item.id;
    });
    setColorId(ColorId);
    setSelectedColor(array);
  };

  const [selectedCut, setSelectedCut] = useState([]);

  const handleCut = (item) => {
    let array = [...selectedCut];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let CutId = array.map((item) => {
      return item.id;
    });
    setCutId(CutId);
    setSelectedCut(array);

    setSelectedCut(array);
  };

  const [selectedSym, setSelectedSym] = useState([]);

  const handleSym = (item) => {
    let array = [...selectedSym];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let SymId = array.map((item) => {
      return item.id;
    });
    setSymId(SymId);
    setSelectedSym(array);
  };

  const [selectedLab, setSelectedLab] = useState([]);

  const handleLab = (item) => {
    let array = [...selectedLab];
    let selectedIndex = array.findIndex((d) => d.id == item.id);
    if (array?.length > 0 && selectedIndex >= 0) {
      array.splice(selectedIndex, 1);
    } else {
      array.push(item);
    }
    let SymId = array.map((item) => {
      return item.id;
    });
    setLabId(SymId);
    setSelectedLab(array);
  };

  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row g-2">
          <div className="col-4">
            <div className="p-3 ">
              Shape
              <br />
              <div className="mt-1">
                {shapes.map((item) => {
                  let selected = selectedShape?.some((tag) => {
                    return tag.id === item.id;
                  });
                  return (
                    <button
                      style={{
                        backgroundColor: selected ? "#3ab591" : "white",
                      }}
                      onClick={() => handleShape(item)}
                    >
                      <img
                        src={item.img}
                        style={{ width: 27, margin: 5 }}
                        alt=""
                        className=""
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Clarity
              <br />
              <div className="mt-1">
                {Clarity.map((item) => {
                  let selected = selectedClarity.some((tag) => {
                    return tag.id === item.id;
                  });
                  return (
                    <button
                      style={{
                        backgroundColor: selected ? "#3ab591" : "white",
                      }}
                      onClick={() => handleClarity(item)}
                    >
                      {item.ClarityName}
                    </button>
                  );
                })}
              </div>{" "}
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Color
              <br />
              <div className="mt-1">
                {Color.map((item) => {
                  let selected = selectedColor.some((tag) => {
                    return tag.id === item.id;
                  });
                  return (
                    <button
                      style={{
                        backgroundColor: selected ? "#3ab591" : "white",
                      }}
                      onClick={() => handleColor(item)}
                    >
                      {" "}
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Cut
              <br />
              <div className="mt-1">
                {Cut.map((item) => {
                  let selected = selectedCut.some((tag) => {
                    return tag.id === item.id;
                  });
                  return (
                    <button
                      style={{
                        backgroundColor: selected ? "#3ab591" : "white",
                      }}
                      onClick={() => handleCut(item)}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Price
              <br />
              <div id="navbarNavDarkDropdown">
                <div style={{ display: "flex" }}>
                  <div className="input-group mb-3" style={{ paddingRight: 5 }}>
                    <span className="input-group-text" id="basic-addon1">
                      FROM
                    </span>
                    <input
                      onChange={(e) => {
                        setPFrom(e.target.value);
                      }}
                      value={Pfrom}
                      type="text"
                      className="form-control"
                      placeholder="$139.75"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      TO
                    </span>
                    <input
                      onChange={(e) => {
                        setPTo(e.target.value);
                      }}
                      value={Pto}
                      type="text"
                      className="form-control"
                      placeholder="$999999.99"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Carat
              <br />
              <div id="navbarNavDarkDropdown">
                <div style={{ display: "flex" }}>
                  <div className="input-group mb-3" style={{ paddingRight: 5 }}>
                    <span className="input-group-text" id="basic-addon1">
                      FROM
                    </span>
                    <input
                      onChange={(e) => {
                        setCFrom(e.target.value);
                      }}
                      value={Cfrom}
                      type="text"
                      className="form-control"
                      placeholder="0.5"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3" style={{}}>
                    <span className="input-group-text" id="basic-addon1">
                      TO
                    </span>
                    <input
                      onChange={(e) => {
                        setCTo(e.target.value);
                      }}
                      value={Cto}
                      type="text"
                      className="form-control"
                      placeholder="22.51"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Fluorescence
              <br />
              {Fluorescence.map((item) => {
                let selected = selectedFluorescence.some((tag) => {
                  return tag.id === item.id;
                });
                return (
                  <button
                    style={{ backgroundColor: selected ? "#3ab591" : "white" }}
                    onClick={() => handleFluorescence(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Polish
              <br />
              {Polish.map((item) => {
                let selected = selectedPolish.some((tag) => {
                  return tag.id === item.id;
                });
                return (
                  <button
                    style={{ backgroundColor: selected ? "#3ab591" : "white" }}
                    onClick={() => handlePolish(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Symmetry
              <br />
              {Sym.map((item) => {
                let selected = selectedSym.some((tag) => {
                  return tag.id === item.id;
                });
                return (
                  <button
                    style={{ backgroundColor: selected ? "#3ab591" : "white" }}
                    onClick={() => handleSym(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Table %
              <br />
              <div id="navbarNavDarkDropdown">
                <div style={{ display: "flex" }}>
                  <div className="input-group mb-3" style={{ paddingRight: 5 }}>
                    <span className="input-group-text" id="basic-addon1">
                      FROM
                    </span>
                    <input
                      onChange={(e) => {
                        setTFrom(e.target.value);
                      }}
                      value={Tfrom}
                      type="text"
                      className="form-control"
                      placeholder="49.5%"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3" style={{}}>
                    <span className="input-group-text" id="basic-addon1">
                      TO
                    </span>
                    <input
                      onChange={(e) => {
                        setTTo(e.target.value);
                      }}
                      value={Tto}
                      type="text"
                      className="form-control"
                      placeholder="81.5%"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Depth %
              <br />
              <div id="navbarNavDarkDropdown">
                <div style={{ display: "flex" }}>
                  <div className="input-group mb-3" style={{ paddingRight: 5 }}>
                    <span className="input-group-text" id="basic-addon1">
                      FROM
                    </span>
                    <input
                      onChange={(e) => {
                        setDFrom(e.target.value);
                      }}
                      value={Dfrom}
                      type="text"
                      className="form-control"
                      placeholder="55.2%"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3" style={{}}>
                    <span className="input-group-text" id="basic-addon1">
                      TO
                    </span>
                    <input
                      onChange={(e) => {
                        setDTo(e.target.value);
                      }}
                      value={Dto}
                      type="text"
                      className="form-control"
                      placeholder="76.9%"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              Lab
              <br />
              {Lab.map((item) => {
                let selected = selectedLab.some((tag) => {
                  return tag.id === item.id;
                });
                return (
                  <button
                    style={{ backgroundColor: selected ? "#3ab591" : "white" }}
                    onClick={() => handleLab(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="p-3 ">
              {" "}
              Diamond Type <br />
              {DiaType.map((item) => {
                return (
                  <button
                    style={{
                      backgroundColor:
                        item.title == selectedDiaType ? "#3ab591" : "white",
                    }}
                    onClick={() => setSelectedDiaType(item.title)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : items.length == 0 ? (
        <div style={{ display: "grid", justifyContent: "center", padding: 20 }}>
          <img
            src={logo}
            alt="loading..."
            style={{ width: 150, height: 150 }}
          />
          <h4>OOPS !!, Nothing in List</h4>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SHAPE</th>
              <th scope="col">CARAT</th>
              <th scope="col">COLOR</th>
              <th scope="col">CLARITY</th>
              <th scope="col">CUT</th>
              <th scope="col">LAB</th>
              <th scope="col">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.ShapeName}</td>
                  <td>{item.carat}</td>
                  <td>{item.ColorName}</td>
                  <td>{item.ClarityName}</td>
                  <td>{item.CutName}</td>
                  <td>{item.LabName}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DiamondLists;
