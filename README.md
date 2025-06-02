# PluginModal

## Comment l'utiliser 

### Installation du package

`npm install @imephra06/pluginmodal`

### Importation dans un projet

`import Modal from "@imephra06/pluginmodal";`

### Utilisation comme un composant normal (ex: App.js)
```
function App() {
  const [open, setOpen] = useState(true);

  const messageModal = "Hello from plugin!";
  const paramsModal = {
    bgColor: "#93AD18",
    Color: "white",
    link: ""
  };

  return (
    <div className="App">
      <Modal
        display={open}
        setDisplay={setOpen}
        message={messageModal}
        params={paramsModal}
      />
    </div>
  );
}

export default App;
```
