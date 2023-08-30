const topSections = document.querySelectorAll('.top-section');
console.log(topSections);

topSections.forEach((topSection) => {
  topSection.addEventListener('click', function () {
    // いずれかの.top-sectionがクリックされた場合
    this.nextElementSibling.classList.toggle('active');
    this.children[1].classList.toggle('rotate');
  });
});

// const =  定数(変数) = 再代入・再宣言が不可
// document.querySelectorAll(".top-section") = クラスなどの指定した要素を全て取得

// topSections = .top-sectionが３つ入っている配列風オブジェクト(NodeList)
// forEach = 配列風オブジェクト(NodeList)の要素を１つずつ取り出す
// topSection = forEachで、定数topSectionsから取り出されたいずれかの.topSectionの要素

// .addEventListener("click", function(){}); = 定型分。深く考える必要はない
// forEach((topSection) => {}); = 定型分

// this = 実際にクリックした、該当の.top-sectionの要素
// nextElementSibling = 並列に並んだ次の要素
// classList.toggle() = クラスの付け外しを行う(クラスがついていれば削除、ついていなければ付与)

// children = 子要素(入れ子になっている要素)を取得。0から数え始めることに注意
