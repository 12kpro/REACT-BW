import PhotoModal from "./PhotoModal";
import PhotoUpload from "./PhotoUpload";

function CardPhoto(props) {
  return (
    <div className="top-card__photo-wrapper">
      <PhotoModal />
      <div className="modal fade" id="UploadPhoto" tabindex="-1" aria-labelledby="upload" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="upload">
                Aggiungi foto
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center px-5 py-4">
              <p className="fs-4">
                La tua foto non deve per forza essere <br /> un tuo primo piano! <br />
                Ma qualcosa che ti rappresenti.
              </p>
              <img src={props.src} alt="eeeeeeeeh sapessi" />
              <p className="text-center text-dark-emphasis py-4" style={{ fontSize: "small" }}>
                Chiediamo agli utenti di Linkedin di utilizzare le loro vere identità, quindi scatta o <br />
                carica una tua foto. Poi ritagliala, applica dei filtri e perfezionala come vuoi.
              </p>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <div>
                <button type="button" className="btn btn-transparent text-primary fw-bold">
                  Fotogrammi
                </button>
              </div>
              <div className="gap-3 d-flex">
                <button
                  type="button"
                  className="btn btn-transparent text-primary border border-primary fw-bold rounded-pill"
                >
                  Usa fotocamera
                </button>
                <label for="files" className="btn btn-primary fw-bold rounded-pill">
                  Carica foto
                  <PhotoUpload />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPhoto;
