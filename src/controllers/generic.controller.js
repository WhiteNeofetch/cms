const boom = require("boom");
const fs = require("fs");
const moment = require("moment");

// /123  - params ?id=123  - query

const genericCrud = (model, { get = "", getAll = "" } = {}) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id).populate(get);
      return res.status(200).send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async getAll(_, res) {
    try {
      const items = await model.find().populate(getAll);
      return res.status(200).send(items);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async create({ body }, res) {
    try {
      let image = body.imageUrl; //ожидает строку base64Image
      let name = body.title; //ожидает название файла
      console.log(body.imageUrl);
      if (image) {
        let base64Image = image.split(";base64,").pop();

       
        let pathFront = `static/${name}-${moment().format(
          "DDMMYYYY-HHmmss_SSS"
          )}.jpg`; //путь для статики фронта
           let path = 'client/' + pathFront; //путь для статики бэка
        
          body.imageUrl = pathFront;
        fs.writeFile(path, base64Image, { encoding: "base64" }, function (err) {
          //создание jpg файла
          console.log("File created");
        });

        const item = new model({ ...body, imageUrl: pathFront });
        const newItem = await item.save();
        return res.status(200).send(newItem);
      } else {
        const item = new model({ ...body });
        const newItem = await item.save();
        return res.status(200).send(newItem);
      }
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async update({ params: { id }, body,ip }, res) {
      try {
        console.log(ip)
      let image = body.imageUrl; //ожидает строку base64Image
      let name = body.title; //ожидает название файла

      if (image.length > 100) {
        let base64Image = image.split(";base64,").pop();

        
        let pathFront = `static/${name}-${moment().format("DDMMYYYY-HHmmss_SSS")}.jpg`; //путь для статики фронта
           let path = 'client/' + pathFront; //путь для статики бэка
        body.imageUrl = pathFront;
        fs.writeFile(path, base64Image, { encoding: "base64" }, function (err) {
          //создание jpg файла
          console.log("File created");
        });
      }
      console.log(body.imageUrl);
      const item = await model.findByIdAndUpdate(id, body, { new: true });
      return res.status(200).send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({
        status: "OK",
        message: "Продукт удален",
      });
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
});

module.exports = genericCrud;
