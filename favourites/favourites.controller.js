const fs = require('fs');

const postDataIntoFile = function postDataIntoFile(req, callback) {
  fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(obj);
      console.log(req.body);
      obj.favourites.push((req.body));
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      return callback(err, {});
    }
    callback(null, {});
  });
};
const sendData = function (req, callback) {
  fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
    } catch (err) {
      console.log('caught the error in catch block');
      return callback(err, {});
    }
    callback(null, data);
  });
};
const deleteData = function (req, callback) {
  fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(req.params.placeid);
      // console.log(obj);
      // console.log(req.body);
      const index = obj.favourites.find(element =>
        // console.log("selected element",element['id']);
        (req.params.placeid == element.id));

      // console.log("index cale",index);
      const indexN = obj.favourites.indexOf(index);
      // console.log(indexN);
      obj.favourites.splice(indexN, 1);
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      console.log(err);
      return callback(err, {});
    }
    callback(null, {});
  });
};
const updateData = function (req, callback) {
  let index;
  fs.readFile('./favourites/favourites.json', (err, data) => {
    try {
      if (err) {
        throw (err);
      }
      const obj = JSON.parse(data);
      console.log(obj);
      console.log(req.body);
       index = obj.favourites.find(element => (req.params.placeid === element.id));
      const indexN = obj.favourites.indexOf(index);
      index.userComments = req.body.userComments;


      console.log(indexN);
      console.log(obj);

      fs.writeFile('./favourites/favourites.json', JSON.stringify(obj, null, 3), (err) => {
        if (err) {
          throw (err);
        }
        return false;
      });
    } catch (err) {
      console.log('caught the error in catch block');
      console.log(err);
      return callback(err, {});
    }
    callback(null, JSON.stringify(index));
  });
};


module.exports = {
  postDataIntoFile,
  sendData,
  deleteData,
  updateData,
};
