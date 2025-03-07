// switch camera when multiple cameras for url #mycameraname

xrf.addEventListener('dynamicKey', (opts) => {
  // select active camera if any
  let {id,match,v} = opts
  match.map( (w) => {
    w.nodes.map( (node) => {
      if( node.isCamera ){ 
        console.log("switching camera to cam: "+node.name)
        xrf.model.camera = node 
      }
    })
  })
})
