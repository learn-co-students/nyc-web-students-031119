class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  # attributes :id, :username, :subjects
  # def subjects
  #   subjects = Subject.all
  #   subjects.map { |subject|
  #     {
  #       id: subject.id,
  #       title: subject.title,
  #       notes: subject.notes
  #     } 
  #   }
  # end
end
