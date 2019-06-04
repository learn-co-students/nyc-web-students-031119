class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes
  has_many :notes
end