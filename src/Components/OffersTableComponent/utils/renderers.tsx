import type { OfferStatus, Platform } from '../../../types/offerTableTypes'
import Icon from '../../IconComponent/Icon'

export const renderPlatforms = (platforms: Platform[]) => (
  <div className="platform-icons">
    {platforms.map((platform) => (
      <span className="platform-icon" key={platform}>
        {platform === 'google' && <Icon name="google" size={40} />}
        {platform === 'a-platform' && <Icon name="a-platform" size={40} />}
        {platform === 'vk' && <Icon name="vk" size={40} />}
        {platform === 'l-platform' && <Icon name="l-platform" size={40} />}
        {platform === 'telegram' && <Icon name="telegram" size={40} />}
      </span>
    ))}
  </div>
)

export const renderStatus = (status: OfferStatus) => {
  if (status === 'active') {
    return <span className="badge badge--green">Активный</span>
  }
  return <span className="badge badge--red">Остановлен</span>
}
