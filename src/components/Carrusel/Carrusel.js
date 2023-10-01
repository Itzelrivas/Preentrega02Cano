import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <div style={{display: "flex", justifyContent:"center", marginTop: "2%"}}>
        <Carousel style={{width: "70%", marginBottom: "4%"}}>
            <Carousel.Item>
                <img style={{width: "100%"}} src="https://attachment.outlook.live.net/owa/MSA%3Aitzelrivas0803%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATY3ZmYAZS1mNzFjLWU1M2YtMDACLTAwCgBGAAADTubMXLGkAkKuCcWhmIoDWQcAOaK02w0lekSV7Q4iArEoIgAAAgEJAAAAOaK02w0lekSV7Q4iArEoIgAGE5VXrAAAAAESABAAOj5XWWETJEWPodMSgGYWLQ%3D%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjQwZjdmNWQ2ODM4NjQyNGE5MjZhNjRiNTc0NjQxOTQ2IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE4Mjk1ODI5MDQ1NTA3MTlcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2N2ZmZS1mNzFjLWU1M2YtMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQyNTk4Mi00MTQ1ODY2MDQ3XCJ9IiwibmJmIjoxNjk2MTQ2MjE3LCJleHAiOjE2OTYxNDY4MTcsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.bl2brv9B3EgUe2ha8UW84hrhuasFZRdpzorGISL-ZXStzGmqW4qI6d9jD2akkLjdRYdTzRTqM4dXM246Yu3IF-J402vzxvUh1VV1jN752p4Bux0xAIl7uzJODzasuAwpSyW0zd1E2-CJduwQ_LdJcMjygN7tSO8eIodnK4WgvyCZSWmK-CVSFV6_dF3QGqh9qWGOXc9My71vGYFCakwGnzwUAkXxxD44MH7-YtOBNOLx-xy5qERXtnfYgIbTqZcBT__U8YVYP2lnWqFWSHtBjtVzW2PbAUS-8Pw8o7ftzX2gUlwE9a34C2GaiFLVWkKfsw0ykQDbIpvFhSBw3Xhv5A&X-OWA-CANARY=g_rKXRke60S8QUQo3jghm8BD2L5SwtsY6RtBND8N2Qd-ct2hxXxyPyrKw7R3cKQKhGbQPKYRfqE.&owa=outlook.live.com&scriptVer=20230922005.11&animation=true" alt="Logo Pancho Ross"/>
                <Carousel.Caption style={{backgroundColor: "#f5f5dcc4", textAlign:"center", color:"black"}}>
                    <h3>Descuento en tu primera compra</h3>
                    <p>Para obtener un código del 10% de descuento en tu primera compra, registrate por favor.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width: "100%"}} src="https://attachment.outlook.live.net/owa/MSA%3Aitzelrivas0803%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATY3ZmYAZS1mNzFjLWU1M2YtMDACLTAwCgBGAAADTubMXLGkAkKuCcWhmIoDWQcAOaK02w0lekSV7Q4iArEoIgAAAgEJAAAAOaK02w0lekSV7Q4iArEoIgAGE5VXrgAAAAESABAA7SHW1gDJXlBGoi1ThUjnbV8%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjQwZjdmNWQ2ODM4NjQyNGE5MjZhNjRiNTc0NjQxOTQ2IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE4Mjk1ODI5MDQ1NTA3MTlcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2N2ZmZS1mNzFjLWU1M2YtMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQyNTk4Mi00MTQ1ODY2MDQ3XCJ9IiwibmJmIjoxNjk2MTQ3NzIwLCJleHAiOjE2OTYxNDgzMjAsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.s2sjvurx_8HM5QofnbChQvAvjKCw_yAdngLg76aQTrIwe9hqLeNqyB5ai5P8wIMxayHvEdN2nyeqVga8Dv8Ld0k4GRzN9890dNhfVrqvseF-ON1Se2Czdf_pcbIG7Qj0xADbx7QLQ4AI8L0s41AvA5MHfvCXqnUz7sIQpviWuucU7PC8eRf-5OHGoBPycBUpBVMQ25F4K9_leaPR199lery7olY4MwMKhBBC5rwqTiuwfD3XAfPS2eO7UT4AAdx6-GDYgEwd_qTCsulLknZvX0fBIUZmJhqFHauIeclpM2laPTCg5Be8rivo-7hneD6fEsEsdDiFhZD2BeM-aHQOVQ&X-OWA-CANARY=jX-dganUfESX9ZpTqgRQwBAo3NJVwtsYu1AjO-FbV6jTKLZf5lEC9Wq64Y4OaH3zPv42vYIUd5I.&owa=outlook.live.com&scriptVer=20230922005.11&animation=true" alt="Logo Pancho Ross"/>
                <Carousel.Caption style={{backgroundColor: "#f5f5dcc4", textAlign:"center", color:"black"}}>
                    <h3>Nuevos productos cada semana</h3>
                    <p>Actualizamos nuestro catálogo cada siete días, usualmente el día Lunes.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default UncontrolledExample;