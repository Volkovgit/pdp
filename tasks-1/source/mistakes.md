## бесполезные циклы
for (var i = 0; i < 1000000; i ++) {i + 'a'}
## "large dom"
Слишком большое количество чилдренов у 1 элемента.   
"The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer style calculations, and produce costly layout reflows. Learn more." 
## Viewport
нужен метатег чтобы быстрее загружать страницу
