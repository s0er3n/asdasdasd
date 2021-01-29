import * as React from "react";
import { navigate } from "@reach/router";

export default function AddLocation(props: any) {
  const toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      if (file === null) {
        reject("file ist null");
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [data, setData] = React.useState({
    name: "",
    website: "",
    info: "",
    category: "",
    reason: "",
    googlemaps: "",
    image: ""
  });

  function handleChange(e: any, key: string) {
    setData({
      ...data,
      [key]: e.target.value
    });
    console.log(data);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions: any = {
      method: "POST",
      body: raw
    };

    fetch("https://Backend.srenmichaels.repl.co/addLocation", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    navigate("/");
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <label>Name des Ortes</label>
        <input
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="z. B. Bioladen xyz"
          name="name"
          required
          id="name"
        />
        <label>Webseite</label>
        <input
          onChange={(e) => handleChange(e, "website")}
          type="url"
          placeholder="https://wwww.example.com"
          name="website"
          id="website"
          required
        />
        <label>Informationen</label>
        <textarea
          onChange={(e) => handleChange(e, "info")}
          name="info"
          id="info"
          placeholder="z. B. Öffnungszeiten, Angebot und Besonderheiten"
          cols={30}
          required
          rows={10}
        ></textarea>
        <label>Kategorien</label>
        <input
          onChange={(e) => handleChange(e, "category")}
          type="text"
          placeholder="z. B. essen, vegan, einkaufen..."
          name="category"
          required
          id="category"
        />
        <label>Warum ist dieser Ort nachhaltig?</label>
        <textarea
          onChange={(e) => handleChange(e, "reason")}
          name="reason"
          id="reason"
          placeholder="z. B. unverpackt, regional , faire Löhne"
          cols={30}
          rows={10}
          required
        ></textarea>
        <label>Link zu Google Maps</label>
        <input
          onChange={(e) => handleChange(e, "googlemaps")}
          type="url"
          placeholder="https://www.google.de/maps/place/Rathaus+Sch%C3%B6neberg/@52.4919643,13.3767726,14z/data=!4m5!3m4!1s0x47a85042a0afb545:0x38de345dd266c33!8m2!3d52.4847926!4d13.3441508"
          name="googlemaps"
          id="googlemaps"
          required
        />
        <label>Lade ein Bild zu dem Ort hoch</label>
        <input
          onChange={async function (e) {
            return setData({
              ...data,
              image:
                e.target.files !== null
                  ? String(await toBase64(e.target.files![0]))
                  : ""
            });
          }}
          type="file"
          name="img"
          accept="image/*"
          required
        />
        <button type="submit">Ort einreichen</button>
      </form>
    </div>
  );
}
