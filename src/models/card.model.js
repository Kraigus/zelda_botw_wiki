const { Schema, model } = require('mongoose');

const post = new Schema(
  {
    title: String,
    body: String,
    image: {type : String, default: "https://www.tinydog.ru/wp-content/uploads/2016/07/Foto-sobaki.jpg" },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: String,
    updatedAt: Date,
  },
  { timestamps: true }
);

post.statics.mostRecent = async function () {
  return this.find().sort({ createdAt: -1 }).limit(5).populate('author').exec();
};

module.exports = model('Post', post);
