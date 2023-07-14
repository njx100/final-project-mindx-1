<div class="row">
  <div class="row col-12 justify-content-between">
    <div class="col-auto media">
      <img src="${review_2.img}" alt="" />
    </div>
    <div class="col media-body ml-4 text-start text-secondary">
      <div class="row">
        <div class="row">
          <strong class="col-auto">${review_2.name}</strong>
          <div class="col"></div>
          <div class="col-auto text-end render-stars">
            ${renderStars(review_2.rating)}
          </div>
        </div>
        <p class="col-12">${review_2.review}</p>
      </div>
    </div>
  </div>
</div>;
