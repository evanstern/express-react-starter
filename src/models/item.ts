import { Document, Schema, model, Model } from 'mongoose';

export interface IItem {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IItemModel extends IItem, Document {
  prettyDescription: () => string;
}

export const ItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

ItemSchema.methods.prettyDescription = function(): string {
  return this.description.length > 20
    ? `${this.description.substring(0, 17)}...`
    : this.description;
};

export const Item: Model<IItemModel> = model<IItemModel>('Item', ItemSchema);
