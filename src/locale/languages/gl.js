export const gl = {
  auth: {
    login: {
      connectingToGitHub: 'Conectando con GitHub...',
      preparingGitPoint: 'Preparando GitPoint...',
      cancel: 'CANCELAR',
      welcomeTitle: 'Benvido a GitPoint',
      welcomeMessage: 'O cliente de GitHub con máis funcións que é 100% gratis',
      notificationsTitle: 'Controlar notificacións',
      notificationsMessage:
        'Ver e controlar tódalas túas notificacións de participacións e sen ler',
      reposTitle: 'Repositorios e Usuarios',
      reposMessage:
        'Accede facilmente a información de repositorios, usuarios e organizacións',
      issuesTitle: 'Issues e Pull Requests',
      issuesMessage:
        'Comunícate en conversas, efectúa merge de pull requests e moito máis',
      signInButton: 'ENTRAR',
    },
    welcome: {
      welcomeTitle: 'Benvido a GitPoint',
    },
    events: {
      welcomeMessage:
        'Benvido!! Este é o teu feed de noticias - vaiche axudar a marterte actualizado coa actividade recente nos repositorios que visitas e as persoas que segues',
      commitCommentEvent: 'comemtou no commit',
      createEvent: 'creaches {{object}}',
      deleteEvent: 'eliminaches {{object}}',
      issueCommentEvent: '{{action}} en {{type}}',
      issueEditedEvent: '{{action}} o teu comentario en {{type}}',
      issueRemovedEvent: '{{action}} o teu comentario en {{type}}',
      issuesEvent: '{{action}} issue',
      publicEvent: {
        action: 'feito',
        connector: 'público',
      },
      pullRequestEvent: '{{action}} pull request',
      pullRequestReviewEvent: '{{action}} revisión de pull request',
      pullRequestReviewCommentEvent: '{{action}} en pull request',
      pullRequestReviewEditedEvent:
        '{{action}} o teu comentario en pull request',
      pullRequestReviewDeletedEvent:
        '{{action}} o teu comentario en pull request',
      releaseEvent: '{{action}} release',
      atConnector: 'en',
      toConnector: 'para',
      types: {
        pullRequest: 'pull request',
        issue: 'issue',
      },
      objects: {
        repository: 'repositorio',
        branch: 'branch',
        tag: 'etiqueta',
      },
      actions: {
        added: 'engadiu',
        created: 'creou',
        edited: 'editou',
        deleted: 'eliminou',
        assigned: 'asignou',
        unassigned: 'retirou',
        labeled: 'etiquetou',
        unlabeled: 'desetiquetou',
        opened: 'abriu',
        milestoned: 'marcou',
        demilestoned: 'desmarcou',
        closed: 'fechou',
        reopened: 'reabriu',
        review_requested: 'solicitou revisión',
        review_request_removed: 'retirou solicitude de revisión',
        submitted: 'enviou',
        dismissed: 'rexeitou',
        published: 'publicou',
        publicized: 'fixo público',
        privatized: 'fixo privado',
        starred: 'engadiu a favoritos',
        pushedTo: 'fixo un push para ',
        forked: 'fixo unha fork de',
        commented: 'comentou',
        removed: 'quitou',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Non aparecen tódalas túas organizacións?',
      orgsRequestApprovalBottom:
        'Pode ser que teñas que solicitar aprobación para eles.',
      codePushCheck: 'Comproba se hai actualizacións',
      codePushChecking: 'Buscando actualizacións...',
      codePushUpdated: 'A app está actualizada',
      codePushAvailable: 'Hai actualizacións dispoñibles!',
      codePushNotApplicable: 'Non é aplicable en modo de depuración',
    },
    userOptions: {
      donate: 'Realiza unha doazón',
      title: 'Opcións',
      language: 'Idioma',
      privacyPolicy: 'Política de privacidade',
      signOut: 'Sair',
    },
    privacyPolicy: {
      title: 'Política de privacidade',
      effectiveDate: 'Última actualización:  15 de Xullo de 2017',
      introduction:
        'Estamos encantados de que decidiras usar GitPoint. Esta Política de Privacidade está aquí para informarte acerca do que facemos - e do que non facemos, cos teus datos',
      userDataTitle: 'DATOS DO USUARIO',
      userData1:
        'Nós non facemos nada coa túa información de GitHub. Despois de autenticarte, o token de usuario de OAuth gárdase directamente no sistema de almacenamento do teu dispositivo. Para nós é imposible acceder a esa información. Nunca, baixo ningunha circunstancia, vemos ou almacenamos ese token.',
      userData2:
        'Esto significa que de ningunha maneira vemos, usamos ou compartimos os datos de GitHub do usuario. Se nalgún momento se visualizaran datos privados, nunca os veremos ou gardaremos. Se accidentalmente se gardaran, serán inmediatamente eliminados usando métodos de borrado seguros. Lembrar que a autenticación xa está configurada para que isto non ocurra nunca.',
      analyticsInfoTitle: 'INFORMACIÓN DE ANALYTICS',
      analyticsInfo1:
        'Actualmente, estamos a usar Google Analytics e iTunes App Analytics para axudarnos a medir o tráfico e as tendencias de uso de GitPoint. Estas ferramentas recollen información enviada polo teu dispositivo, incluíndo a versión da plataforma e do propio dispositivo, a rexión e o referente. Esta información non permite identificar ó individuo, e ningunha información persoal é extaída.',
      analyticsInfo2:
        'Se nun futuro se incluíra outra plataforma de terceiros para recoller ratros de pila, logs de erros ou outras informacións para analytics, certificaremos que os datos de usuario permanezan anónimos e encriptados.',
      openSourceTitle: 'CÓDIGO ABERTO',
      openSource1:
        'GitPoint é código aberto, e o historial de contribucións á plataforma será sempre visible para o público.',
      openSource2:
        'Con cada contribución para a app, realízase unha revisión do código para previr que ninguén inclúa código malicioso de ningunha caste.',
      contactTitle: 'CONTACTO',
      contact1:
        'Graciñas por leres a nosa Política de Privacidade. Só agardamos que disfrutes usando GitPoint outro tanto como nós disfrutamos construíndoo.',
      contact2:
        'Se tiveras algunha dúbida sobre esta Política de Privacidade ou sobre GitPoint en xeral, por favor, abre un novo issue no',
      contactLink: 'repositorio de GitPoint',
    },
  },
  notifications: {
    main: {
      unread: 'sen ler',
      participating: 'participando',
      all: 'todas',
      unreadButton: 'Sen ler',
      participatingButton: 'Participando',
      allButton: 'Todas',
      retrievingMessage: 'Recuperando notificacións',
      noneMessage: 'Non tés notificacións deste tipo',
      markAllAsRead: 'Marca todas como lidas',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repositorios',
      userButton: 'Usuarios',
      searchingMessage: 'Buscando por {{query}}',
      searchMessage: 'Buscando por calquera {{type}}',
      repository: 'repositorio',
      user: 'usuario',
      noUsersFound: 'Non se atopou ningún usuario :(',
      noRepositoriesFound: 'Non se atopou ningún repositorio :(',
    },
  },
  user: {
    profile: {
      userActions: 'Accións do Usuario',
      unfollow: 'Deixar de seguir',
      follow: 'Seguir',
    },
    repositoryList: {
      title: 'Repositorios',
    },
    starredRepositoryList: {
      title: 'Favoritos',
      text: 'Favoritos',
    },
    followers: {
      title: 'Seguidores',
      text: 'Seguidores',
      followsYou: 'Seguíndote',
    },
    following: {
      title: 'Seguindo',
      text: 'Seguindo',
      followingYou: 'Seguindo',
    },
  },
  repository: {
    main: {
      notFoundRepo: 'Repository is not found',
      unknowLanguage: 'Unknown',
      shareRepositoryTitle: 'Compartir {{repoName}}',
      shareRepositoryMessage: 'Revisa {{repoName}} en GitHub. {{repoUrl}}',
      repoActions: 'Accións do Repositorio',
      forkAction: 'Fork (Bifurcar)',
      starAction: 'Engadir a favoritos',
      unstarAction: 'Eliminar de favoritos',
      shareAction: 'Compartir',
      unwatchAction: 'Deixar de Vixiar',
      watchAction: 'Vixiar',
      ownerTitle: 'PROPIETARIO',
      contributorsTitle: 'CONTRIBUIDORES',
      noContributorsMessage: 'No se atopou ningún contribuidor',
      sourceTitle: 'CÓDIGO-FONTE',
      readMe: 'README',
      viewSource: 'Ver Código',
      issuesTitle: 'ISSUES',
      noIssuesMessage: 'Ningún issue',
      noOpenIssuesMessage: 'Ningún issue aberto',
      viewAllButton: 'Velos todos',
      newIssueButton: 'Novo Issue',
      pullRequestTitle: 'PULL REQUESTS',
      noPullRequestsMessage: 'Ningunha pull request',
      noOpenPullRequestsMessage: 'Ningunha pull request aberta',
      starsTitle: 'Favorito',
      forksTitle: 'Forks',
      forkedFromMessage: ' é un fork de',
      starred: 'Engadido a favoritos',
      watching: 'Vixiando',
      watchers: 'Vixiantes',
      topicsTitle: 'TOPICS',
    },
    codeList: {
      title: 'Código',
    },
    issueList: {
      title: 'Issues',
      openButton: 'Abertos',
      closedButton: 'Fechados',
      searchingMessage: 'Buscando por {{query}}',
      noOpenIssues: 'Non se atoparon issues abertos!',
      noClosedIssues: 'Non se atoparon issues fechados!',
    },
    pullList: {
      title: 'Pull Requests',
      openButton: 'Abertas',
      closedButton: 'Fechadas',
      searchingMessage: 'Buscando por {{query}}',
      noOpenPulls: 'Non se atoparon pull requests abertas!',
      noClosedPulls: 'Non se atoparon pull requests fechadas!',
    },
    pullDiff: {
      title: 'Diff',
      numFilesChanged: '{{numFilesChanged}} arquivos',
      new: 'NOVO',
      deleted: 'ELIMINADO',
      fileRenamed: 'Arquivo renomeado sen trocos',
    },
    readMe: {
      readMeActions: 'Accións do README',
      noReadMeFound: 'Non se atopou o README.md',
    },
  },
  organization: {
    main: {
      membersTitle: 'MEMBROS',
      descriptionTitle: 'DESCRICIÓN',
    },
    organizationActions: 'Accións das Organizacións',
  },
  issue: {
    settings: {
      title: 'Configuración',
      pullRequestType: 'Pull Request',
      issueType: 'Issue',
      applyLabelButton: 'Aplicar Etiqueta',
      noneMessage: 'Aínda ningunha',
      labelsTitle: 'ETIQUETAS',
      assignYourselfButton: 'Asígnate a ti mesmo',
      assigneesTitle: 'ASSIGNADA A',
      actionsTitle: 'ACCIÓNS',
      unlockIssue: 'Desbloquear {{issueType}}',
      lockIssue: 'Bloquear {{issueType}}',
      closeIssue: 'Fechar {{issueType}}',
      reopenIssue: 'Reabrir {{issueType}}',
      areYouSurePrompt: 'Estás seguro?',
      applyLabelTitle: 'Aplica unha etiqueta a este issue',
    },
    comment: {
      commentActions: 'Accións de comentario',
      editCommentTitle: 'Editar Comentario',
      editAction: 'Editar',
      deleteAction: 'Eliminar',
    },
    main: {
      assignees: 'Asignada a',
      mergeButton: 'Merge (Fusiona) Pull Request',
      noDescription: 'Non hai unha description fornecida.',
      lockedCommentInput: 'Bloqueado, pero aínda podes comentar...',
      commentInput: 'Engadir un comentario...',
      lockedIssue: 'Issue bloqueado',
      states: {
        open: 'Aberto',
        closed: 'Fechado',
        merged: 'Merged (Fusionado)',
      },
      screenTitles: {
        issue: 'Issue',
        pullRequest: 'Pull Request',
      },
      openIssueSubTitle: '#{{number}} aberto fai {{time}} por {{user}}',
      closedIssueSubTitle: '#{{number}} foi fechado fai {{time}}  por {{user}}',
      issueActions: 'Accións dos Issues',
    },
    newIssue: {
      title: 'Novo Issue',
      missingTitleAlert: 'É necesario que o issue teña un título!',
      issueTitle: 'Título do issue',
      writeATitle: 'Escribe un título par o issue aquí',
      issueComment: 'Comentario do issue',
      writeAComment: 'Escribe aquí un comentario para o teu issue',
    },
    pullMerge: {
      title: 'Merge (Fusiona) a Pull Request',
      createMergeCommit: 'Crea un merge commit',
      squashAndMerge: 'Squash e merge',
      merge: 'merge',
      squash: 'squash',
      missingTitleAlert: 'Necesitas un título para o commit!',
      commitTitle: 'Título do commit',
      writeATitle: 'Escribe aquí un título para o teu commit',
      commitMessage: 'Menasaxe do commit',
      writeAMessage: 'Escribe aquí unha mensaxe para o teu commit',
      mergeType: 'Tipo de merge',
      changeMergeType: 'Cambia o tipo de merge',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Favoritos',
    orgs: 'ORGANIZACIÓNS',
    noOrgsMessage: 'Sen organizacións',
    info: 'INFO',
    company: 'Empresa',
    location: 'Localización',
    email: 'Correo electrónico',
    website: 'Sitio Web',
    repositories: 'Repositorios',
    cancel: 'Cancelar',
    yes: 'Si',
    ok: 'OK',
    submit: 'Enviar',
    relativeTime: {
      lessThanXSeconds: '{{count}}s',
      xSeconds: '{{count}}s',
      halfAMinute: '30s',
      lessThanXMinutes: '{{count}}m',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}y',
      xYears: '{{count}}y',
      overXYears: '{{count}}y',
      almostXYears: '{{count}}y',
    },
    abbreviations: {
      thousand: 'k',
    },
    openInBrowser: 'Abrir no navegador',
  },
};
