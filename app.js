const { connectMongose } = require('./mongoose_connect');

(async () => connectMongose())();

// perform left join query
// add a new array field to each input document

// $unionWith - to combine elements from two different collections

/* {
  $lookup:
    {
      from: <collection to join>,
      localField: <field from the input documents>,
      foreignField: <field from the documents of the "from" collection>,
      as: <output array field>
    }
} */