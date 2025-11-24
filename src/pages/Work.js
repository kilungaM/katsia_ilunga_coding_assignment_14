import React from 'react';
import { Card } from '../components/Card';

function Work() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My current portfolio website built as Assignment 14 for the course.',
      tech: ['React', 'Storybook', 'CSS'],
      extraLines: ['Version-controlled with GitHub', 'Deployed using local dev server'],
      link: 'https://github.com/kilungaM/ilunga_katsia_ui_garden',
    },
    {
      title: 'CRM',
      description: 'A small CRM app built in React for managing design clients and projects.',
      tech: ['React', 'CSS'],
      extraLines: ['Includes forms and routing', 'Uses components and UI layouts'],
      link: 'https://github.com/kilungaM/Crm_app',
    },
    {
      title: 'MealDB Rails Project',
      description: 'A Ruby on Rails app fetching live meal data from TheMealDB API.',
      tech: ['Ruby on Rails', 'Fetch API', 'Bootstrap'],
      extraLines: ['Dynamic meal pages', 'Connected API with seeds and mapping'],
      link: 'https://github.com/kilungaM/rails_project',
    },
    {
      title: 'Ilunga Katsia Site',
      description: 'Another portfolio site showcasing projects and personal work.',
      tech: ['React', 'CSS', 'Docker'],
      extraLines: ['Containerized with Docker', 'Hosted locally and on GitHub'],
      link: 'https://github.com/kilungaM/katsia_ilunga_site',
    },
    {
      title: 'Keep Warm Ministries',
      description: 'A small CMS for managing content for Keep Warm Ministries.',
      tech: ['React', 'Node.js', 'CSS'],
      extraLines: ['Includes user authentication', 'Supports page management'],
      link: 'https://github.com/kilungaM/keep_warm_ministries',
    },
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>My Work</h1>

      {projects.map((project, i) => (
        <Card
          key={i}
          title={project.title}
          description={project.description}
          tech={project.tech}
          extraLines={project.extraLines}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Work;
