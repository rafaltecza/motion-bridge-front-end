import {useParams} from "react-router";
import {Grid, MenuItem, Select} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
import React, {useEffect, useState} from "react";

import {useProductConfiguration} from "../../hooks/useProductConfiguration";
import {PanelForm} from "./PanelForm";
import Halo from "../../components/VantaAnimation/Halo";
import Card from "../../components/Card";
import Lottie from "react-lottie-player";

const PanelPage = () => {
  const [productsConfiguration, setProductsConfiguration] = useState(useProductConfiguration);
  const [formState, setFormState] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState({});
  const [isAnimationLoaded, setAnimationLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [renderURL, setRenderURL] = useState('');
  console.log(productsConfiguration);

  const {productRoute} = useParams();

    const getData=()=>{
        fetch('../lottie/example.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                setCurrentAnimation(myJson);
                setAnimationLoaded(true);
                console.log(myJson);
            });
    }
    useEffect(()=>{
        getData()
    },[])

  const findConfiguration = () => {
      let output;
      productsConfiguration.map((product, index) => {
          console.log(product);
          console.log(Object.entries(product));
          console.log(product.route === productRoute);
          console.log(product.id === parseInt(productRoute));
          if (product.route === productRoute || product.id === parseInt(productRoute)) {
              output = product;
          }
      });
      return output;
  };
  const product = findConfiguration();

  console.log("HERE");
  console.log(product.forms[formState]);
  console.log(product.forms[formState].form.map((valueObject, index) => {
      console.log(valueObject);

  }));

  return (
      <>
      <Halo className={"background-vanta"}/>
    <div className={"container"}  style={{
          minHeight: '90vh',
          fontFamily: "Poppins, sans-serif"
      }}>
          <div className={"mt-5 mb-4"}>
              <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                          <Card className={"mb-3"}>
                              <CardContent icon={product?.icon}>
                                  <h3 className={"m-0 text-title"}>{product?.name
                                      .replaceAll('{formState}', formState + 1)
                                      .replaceAll('{maxFormState}', product?.forms?.length.toString())}</h3>
                              </CardContent>
                          </Card>

                          <Card>
                              <CardContent>
                                  <PanelForm isLoading={isLoading}
                                             setLoading={setLoading}
                                             isRendered={isRendered}
                                             setIsRendered={setIsRendered}
                                             renderURL={renderURL}
                                             setRenderURL={setRenderURL}
                                             productForm={product.forms[formState]}
                                             currentAnimation={currentAnimation}
                                             setFormState={setFormState}/>
                              </CardContent>
                          </Card>
                      </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                {isAnimationLoaded ? <Lottie
                                    loop
                                    animationData={currentAnimation}
                                    play
                                    className={'mx-auto'}
                                    style={{ width: 450, height: 450 }}
                                /> : <div>Loading...</div>}

                            </CardContent>
                        </Card>
                    </Grid>

              </Grid>
          </div>
      </div>
      </>
  );
}

export default PanelPage;