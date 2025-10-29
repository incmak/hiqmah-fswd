import { CopyCheck, Plus, User } from 'lucide-react';
import './profile-card.css';

export default function ProfileCard({ profile }) {
  console.log('🚀 ~ ProfileCard ~ item:', profile);
  return (
    <div className='profile-card'>
      <img className='profile-image' src={profile.img} />
      <div className='profile-content'>
        <h3 className='profile-name'>{profile.name}</h3>
        <p className='profile-description'>{profile.description}</p>
        <div className='profile-actions'>
          <div className='social-stats'>
            <User size={16} />
            {profile.followers}
          </div>
          <div className='social-stats'>
            <CopyCheck size={16} />
            {profile.following}
          </div>
          <button className='follow-btn'>
            <Plus size={16} />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}
