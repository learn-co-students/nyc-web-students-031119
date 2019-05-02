class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :votes, :throne, :in_chair, :img_url
end
