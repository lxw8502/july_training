# Assignment 2

### 1. em Vs rem
em is relative to the font-size of its direct or nearest parent.       
rem is only relative to the html (root) font-size.       


### 2. css selectors

#### .class    
class selector, select these elements have specify class name.      

#### #id    
Id selector, select these elements have specify id.       

#### div ~ p
Select all sibing p element that after div element.

#### div p
Select all p elements in the descendants of the div element.

#### div > p
Select all p elements that are direct children of div element.

#### div + p
If div element's next sibling is p element, select it.

#### [target]
Select all elements with an target attribute.

#### p:first-child
Select all p elements that are the first child of their parent.

#### p::first-letter
Select the first letter of all p elements.

#### p::first-line
Select the first line of all p elements.

#### p::first-of-type
Select all p elements that are the first p element of their parent.

#### input:readonly
Select all input element that read only.

#### input:required
Select all input element that have required attribute.