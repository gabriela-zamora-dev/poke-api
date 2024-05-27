<template>
    <div style="padding-bottom: 80px;">
      <nav class="navbar bg-danger fixed-top">
        <div class="container-fluid align-items-center">
          <img
            src="/images/pokedex-logo.png"
            alt="Imagen de logo de Pokedex"
            class="img-fluid"
          />
          <form class="d-flex">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Buscar"
                aria-label="Buscar"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  ></path>
                </svg>
              </span>
            </div>
          </form>
        </div>
      </nav>      
    </div>
  </template>