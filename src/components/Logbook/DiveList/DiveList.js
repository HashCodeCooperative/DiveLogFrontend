import React, {Component} from 'react';
import {Accordion} from 'uikit-react'
import DiveDetails from './DiveDetails/DiveDetails';
import Spinner from '../../UI/Spinner/Spinner';
// import classes from './DiveList.module.css';

class DiveList extends Component {

    state = {
        dives: null,
        error: null
    }

    componentDidMount = () => {
      
        // const path = '/users/' + this.props.diverId + '/dives';
        // axios.get(path)
        //     .then(response => {
        //         this.setState({dives: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: error});
        //     });

        this.setState({dives: [
            {   "userDiveId":1,
                "divingSuit":"Suchy",
                "gas":"Nitrox",
                "cylinderType":"Aluminiowy",
                "durationInMinutes":15,
                "cylinderCapacity":15,
                "cylStartPressure":90,
                "cylEndPressure":90,
                "surfaceAirConsumption":9.5,
                "maxDepth":9.5,
                "avgDepth":9.5,
                "ballast":90,
                "notes":"opis mojego nurkowania",
                "user": {
                    "userId":1,
                    "isRegistered":true,
                    "login":"Lolek",
                    "firstName":"Jan",
                    "lastName":"Kowalski",
                    "email":"jankowalski@wp.pl",
                    "passwordHash":null,
                    "passwordSalt":null,
                    "about":"Jestem Janem",
                    "userDives":[]
                },
                "dive":{
                    "diveId":1,
                    "startTime":"2020-11-18T15:03:46.833",
                    "endTime":"2020-11-18T20:03:46.833",
                    "diveType":"Ocean",
                    "water":"Słodka",
                    "waterStream":"Brak",
                    "weather":"Słonecznie",
                    "airTemp":90,
                    "waterTemp":90,
                    "visibility":90,
                    "description":"opis nurkowania ogolny",
                    "diveSite":{
                        "diveSiteId":1,
                        "name":"Koparki Jaworzno",
                        "gpsPosition":"000.000 gps pos",
                        "description":"nurkowania ktore realizujemy co roku",
                        "dives":[]
                    },
                    "divers":[
                        {
                            "userDiveId":3,
                            "divingSuit":"Suchy",
                            "gas":"Nitrox",
                            "cylinderType":"Aluminiowy",
                            "durationInMinutes":25,
                            "cylinderCapacity":80,
                            "cylStartPressure":80,
                            "cylEndPressure":80,
                            "surfaceAirConsumption":8.7,
                            "maxDepth":10.0,
                            "avgDepth":9.5,
                            "ballast":40,
                            "notes":"inne moje nurkowanie",
                            "user":{
                                "userId":3,
                                "isRegistered":true,
                                "login":"Albin",
                                "firstName":"Wojciech",
                                "lastName":"Nowak",
                                "email":"nowak9@wp.pl",
                                "passwordHash":null,
                                "passwordSalt":null,
                                "about":"uwielbiam nurkowac"
                                ,"userDives":[]
                            }
                        }
                    ]
                }
            },

            {   "userDiveId":4,
                "divingSuit":"Suchy",
                "gas":"Powietrze",
                "cylinderType":"Stalowy",
                "durationInMinutes":60,
                "cylinderCapacity":12,
                "cylStartPressure":100,
                "cylEndPressure":20,
                "surfaceAirConsumption":4.0,
                "maxDepth":20.0,
                "avgDepth":11.0,
                "ballast":0,
                "notes":"my deepest dive",
                "user":{
                    "userId":1,
                    "isRegistered":true,
                    "login":"Lolek",
                    "firstName":"Jan",
                    "lastName":"Kowalski",
                    "email":"jankowalski@wp.pl",
                    "passwordHash":null,
                    "passwordSalt":null,
                    "about":"Jestem Janem",
                    "userDives":[]
                },
                "dive":{
                    "diveId":3,
                    "startTime":"2020-11-17T11:23:46.833",
                    "endTime":"2020-11-18T20:03:46.833",
                    "diveType":"Morze",
                    "water":"Słona",
                    "waterStream":"Lekki",
                    "weather":"Zachmurzenie",
                    "airTemp":20,
                    "waterTemp":20,
                    "visibility":100,
                    "description":"another dive",
                    "diveSite":{
                        "diveSiteId":10,
                        "name":"Zakrzówek",
                        "gpsPosition":"nobody knows",
                        "description":"a place from paw patrol",
                        "dives":[]
                    },
                    "divers":[
                        {
                            "userDiveId":5,
                            "divingSuit":"Mokry",
                            "gas":"Powietrze",
                            "cylinderType":"Stalowy",
                            "durationInMinutes":45,
                            "cylinderCapacity":0,
                            "cylStartPressure":0,
                            "cylEndPressure":0,
                            "surfaceAirConsumption":0.0,
                            "maxDepth":0.0,
                            "avgDepth":0.0,
                            "ballast":0,
                            "notes":"string",
                            "user":{
                                "userId":3,
                                "isRegistered":true,
                                "login":"Albin",
                                "firstName":"Wojciech",
                                "lastName":"Nowak",
                                "email":"nowak9@wp.pl",
                                "passwordHash":null,
                                "passwordSalt":null,
                                "about":"uwielbiam nurkowac",
                                "userDives":[]
                            }
                        }
                    ]
                }
            }
        ]})
    }

    render() {

        let content = <Spinner/>
        if (this.state.error) {
            content = <p className='uk-text-danger'>something went wrong...</p>
        } else
        if (this.state.dives) {
            const diveDetails = this.state.dives.map(dive => <DiveDetails key={dive.userDiveId} dive={dive}/>)
            content = (
                <Accordion className='uk-margin-left uk-margin-right' options="multiple: true">
                    {diveDetails}
                </Accordion>
            )
        }

        return(
            <div className='uk-container'>
            
                {content}

            </div>
        );
    };
}

export default DiveList;