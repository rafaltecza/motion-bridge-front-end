import {useParams} from "react-router";
import {Grid, MenuItem, Select} from "@material-ui/core";
import CardContent from "../../components/Card/Content";
import React, {useEffect, useState} from "react";

import {useProductConfiguration} from "../../hooks/useProductConfiguration";
import {PanelForm} from "./PanelForm";
import Halo from "../../components/VantaAnimation/Halo";
import Card from "../../components/Card";
import Lottie from "react-lottie-player";
import AnimationCard from "../../components/Animation/Card";
import AnimationPreview from "../../components/Animation/Preview";
import {useQuery} from "@tanstack/react-query";
import {requestInstagram} from "../../api/backend/user";
import useHandleApiError from "../../hooks/useHandleApiError";
import Box from "@mui/material/Box";
import {PanelApiForm} from "./PanelApiForm";

const PanelPage = () => {
  const [productsConfiguration, setProductsConfiguration] = useState(useProductConfiguration);
  const [formState, setFormState] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState({});
  const [isAnimationLoaded, setAnimationLoaded] = useState(false);
  const [isCurrentlyRefreshing, setCurrentlyRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [renderURL, setRenderURL] = useState('');
  const [instagramUser, setInstagramUser] = useState(null);
  const [instagramData, setInstagramData] = useState(null);

  const [isLoadingApiData, setIsLoadingApiData] = useState(false);


  const {productRoute} = useParams();

    const getData=()=>{
        fetch('../lottie/data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setCurrentAnimation(myJson);
                setAnimationLoaded(true);
            });
    }
    useEffect(()=>{
        getData()
    },[])

  const findConfiguration = () => {
      let output;
      productsConfiguration.map((product, index) => {
          if (product.route === productRoute || product.id === parseInt(productRoute)) {
              output = product;
          }
      });
      return output;
  };
  const product = findConfiguration();

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
                          <Grid className={"mb-3"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} container>
                              <Grid item xs={"auto"}>
                                  <h3 className={"m-0 text-title text-white"}>{product?.name}</h3>
                              </Grid>
                              <Grid className={"ms-auto"} item xs={"auto"}>
                                  <Card>
                                        <CardContent>
                                            <div className={"text-center"}>
                                                <h3 className={"m-0 text-title"}>{`${formState + 1}/${product?.forms?.length.toString()}`}</h3>
                                            </div>
                                        </CardContent>
                                  </Card>
                              </Grid>
                          </Grid>
                          <Card>
                              <CardContent>
                                  <Box mb={5}>
                                    <PanelApiForm instagramUser={instagramUser}
                                                setInstagramData={setInstagramData}
                                                setInstagramUser={setInstagramUser}
                                                currentAnimation={currentAnimation}
                                                setCurrentAnimation={setCurrentAnimation}
                                                setCurrentlyRefreshing={setCurrentlyRefreshing}
                                                isCurrentlyRefreshing={isCurrentlyRefreshing}
                                                isLoadingApiData={isLoadingApiData}
                                                setIsLoadingApiData={setIsLoadingApiData}/>
                                  </Box>
                                      <PanelForm isLoading={isLoading}
                                             instagramUser={instagramUser}
                                             setLoading={setLoading}
                                             isRendered={isRendered}
                                             setIsRendered={setIsRendered}
                                             renderURL={renderURL}
                                             setRenderURL={setRenderURL}
                                             productForm={product.forms[formState]}
                                             currentAnimation={currentAnimation}
                                             setFormState={setFormState}
                                                formState={formState}/>
                              </CardContent>
                          </Card>
                      </Grid>

                    <Grid item xs={12} md={6}>
                        <AnimationCard>
                            {!isCurrentlyRefreshing ? <AnimationPreview isAnimationLoaded={isAnimationLoaded} animation={currentAnimation}/> : "Refreshing..." }

                        </AnimationCard>
                    </Grid>

              </Grid>
          </div>
      </div>
      </>
  );
}

export default PanelPage;