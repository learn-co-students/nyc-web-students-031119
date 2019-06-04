subjects = [
  {
    id: 1,
    title: 'React',
    notes: []
  },
  {
    id: 2,
    title: 'Redux',
    notes: []
  },
  {
    id: 3,
    title: 'Functional Programming',
    notes: []
  },
  {
    id: 4,
    title: 'Ruby',
    notes: []
  }
]

subjects.each do |subject|
  Subject.create(title: subject[:title])

  Note.create(text: "#{subject[:title]} note 1", subject_id: subject[:id])
end