module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        dbInstance.create_product([name, description, price, image_url])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Ruh-roh-raggy!"});
                console.log(err)
        } );
    },
  
    getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.read_product(id)
            .then( product => res.status(200).send( product ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Like zoinks Scoob!"});
                console.log(err)
        } );
    },
  
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
  
         dbInstance.read_products()
            .then( products => res.status(200).send( products ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Jinkies!"});
                console.log(err)
        } );
    },
  
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        dbInstance.update_product([params.id, query.desc])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Jeepers!"});
                console.log(err)
        } );
    },
  
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.delete_product(id)
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "Looks like we've got another mystery on our hands!"});
                console.log(err)
        } );
    }
  };


// For future projects: light skelly setup
// module.exports = {
//     create: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
//     },
  
//     getOne: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
//     },
  
//     getAll: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
//     },
  
//     update: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
//     },
  
//     delete: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
//     }
//   };
  