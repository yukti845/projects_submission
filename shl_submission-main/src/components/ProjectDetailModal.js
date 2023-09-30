import ReactModal from 'react-modal';
import ProjectDetails from './ProjectDetails';

ReactModal.setAppElement('root'); // Set the root element as the modal's accessible parent

function ProjectDetailModal({ isOpen, closeModal, project }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Project Details"
    >
      <ProjectDetails project={project} closeModal={closeModal} />
    </ReactModal>
  );
}

export default ProjectDetailModal;