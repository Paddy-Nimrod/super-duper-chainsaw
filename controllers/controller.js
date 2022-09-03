exports.getProducts = (req, res) => {
  res.status(200).send([
    {
      id: "1",
      name: "G-shock watch",
      price: "Kshs.2000",
      description: "this is the g-shock watch for exceptional quality",
    },
    {
      id: "2",
      name: "Television",
      price: "Kshs.32000",
      description: "TV with high quality display with exceptional results",
    },
    {
      id: "3",
      name: "Laptop",
      price: "Kshs.90000",
      description: "Good laptop for coding",
    },
  ]);
};

exports.postProduct = (req, res)=>{
  
}