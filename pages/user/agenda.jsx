import React from 'react'

function Agenda() {
  return (
    <div class="container py-9 py-lg-11 position-relative z-index-1">
      <div class="row">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <h5 class="mb-4 text-info aos-init aos-animate" data-aos="fade-up">
            Schedule and Agenda
          </h5>
          <div
            class="nav nav-pills flex-column aos-init aos-animate"
            id="myTab"
            role="tablist"
            data-aos="fade-up"
          >
            <button
              class="nav-link px-4 text-start mb-3 active"
              id="d1-tab"
              data-bs-toggle="tab"
              data-bs-target="#day1"
              type="button"
              role="tab"
              aria-controls="day1"
              aria-selected="true"
            >
              <span class="d-block fs-5 fw-bold">Day 1</span>
              <span class="small">Mon, Jan 2, 2023</span>
            </button>
            <button
              class="nav-link px-4 text-start"
              id="d2-tab"
              data-bs-toggle="tab"
              data-bs-target="#day2"
              type="button"
              role="tab"
              aria-controls="day2"
              aria-selected="false"
              tabindex="-1"
            >
              <span class="d-block fs-5 fw-bold">Day 2</span>
              <span class="small">Tue, Jan 3, 2023</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;